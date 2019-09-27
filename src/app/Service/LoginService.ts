import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AdressIp} from './AdressIp';

Injectable({
    providedIn: 'root'
})
export class LoginService {
    public jwtokent: any;
    public roles: [{ authority:string }];
    public is_truck=true;
    constructor(public httpclient:HttpClient,public router:Router) { }


    login(user){
        this.httpclient.post(AdressIp.host+'login',user,{observe:'response'}).subscribe(
            resp=>{console.log(resp);
                let jwt=resp.headers.get("Authorization");
                this.SaveToken(jwt);


            }
        )
    }

    loadtoken(){
        this.jwtokent=sessionStorage.getItem("token");
    }

    SaveToken(jwt){
        this.jwtokent=jwt;
        sessionStorage.setItem("token",jwt);
        let jwthelper=new JwtHelper();//npm install --save rxjs-compat  npm install @angular/http@latest npm install angular2-jwt pour la dependance angular2-jwt
        this.roles=jwthelper.decodeToken(this.jwtokent).roles;
        if (this.roles[0].authority==='FLEET MANAGER') {
            this.router.navigateByUrl("/fleetmanager");
            this.is_truck=true;
        }
        if (this.roles[0].authority==='TRUCK INSPECTOR') {
            this.is_truck=false;
            this.router.navigateByUrl("/listtransportuer");

        }
        if (this.roles[0].authority==='DISPATCHEUR') {
            this.router.navigateByUrl("/dispatcher");
        }
        if (this.roles[0].authority==='MANAGER CSL') {
            this.router.navigateByUrl("/managercsl");
        }
        if (this.roles[0].authority==='SHE TRANSPORTEUR') {
            this.router.navigateByUrl("/shetransporteur");
        }
        console.log(this.roles[0].authority);
        console.log(jwthelper.decodeToken(jwt),jwthelper.getTokenExpirationDate(jwt),jwthelper.isTokenExpired(jwt))
    }

}
