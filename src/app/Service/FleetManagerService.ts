import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Vehicules} from '../Model/Vehicules';
import {AdressIp} from './AdressIp';
import {LoginService} from './LoginService';
import {Chauffeur} from '../Model/Chauffeur';
import {Transporteur} from '../Model/Transporteur';
import {Questionnaire} from '../Model/Questionnaire';
import {CheckList} from '../Model/CheckList';
import {CheckListQuestions} from '../Model/CheckListQuestions';

Injectable({
    providedIn: 'root'
})
export class FleetManagerService {

    public listtransporteur:Transporteur[]=[];
    public listvehicule:Vehicules[]=[];
    public transporteur:Transporteur=new Transporteur();
    public checklist:CheckList=new CheckList();
    public listchecklis:CheckList[]=[];
    public listchauffeur:Chauffeur[]=[];
    public chauffeur:Chauffeur=new Chauffeur()//cette variable est pour associer le chauffeur au vehicule
    vehicule: Vehicules=new Vehicules();
    public listquestionnaire: Questionnaire[]=[];

    //cette variable est pour associer le chauffeur au vehicule


    constructor(public httpclient:HttpClient,public router:Router,public loginservice:LoginService) { }

    register_vehicule(vehicule:Vehicules,id_transporteur:number) {
        this.httpclient.post(AdressIp.host+'fleet/save/vehicule/'+id_transporteur,vehicule,
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            resp=>this.router.navigateByUrl("/listtransportuer")
            ,erro=>console.log(erro)
        )

    }

    register_transporteur(transporteur:Transporteur,) {
        this.httpclient.post<Transporteur>(AdressIp.host+'fleet/save/transporteur/',transporteur,
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            resp=>{ console.log(resp),this.Alltransporteur(),this.router.navigateByUrl("/listtransportuer")}
            ,erro=>console.log(erro)
        )

    }

    register_chauffeur(chauffeur:Chauffeur,id_transporteur:number) {
        this.httpclient.post(AdressIp.host+'fleet/save/chauffeur/'+id_transporteur,chauffeur,
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            resp=>this.router.navigateByUrl("/listtransportuer")
            ,erro=>console.log(erro)
        )

    }
    Alltransporteur() {
        this.httpclient.get<Transporteur[]>(AdressIp.host+'fleet/all_transporteur/',
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            resp=>{this.listtransporteur=resp,console.log(resp)}
            ,erro=>console.log(erro)
        )

    }

    AllchauffeurTranspro(id_transporteur:number) {
        this.httpclient.get<Transporteur[]>(AdressIp.host+'fleet/all_transporteur/'+id_transporteur,
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            resp=>{this.listtransporteur=resp,console.log(resp)}
            ,erro=>console.log(erro)
        )

    }

    Allvehicule(id_transproteur:number) {
        this.httpclient.get<Vehicules[]>(AdressIp.host+'fleet/all_transporteur/'+id_transproteur,
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            resp=>{this.listvehicule=resp,console.log(resp)}
            ,erro=>console.log(erro)
        )

    }
    registerQuestionnaire(listquestion: Questionnaire[]) {
        this.httpclient.post<Questionnaire[]>(AdressIp.host+'fleet/save/questionaire',listquestion,
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            resp=>{console.log(resp)}
            ,erro=>console.log(erro)
        )
    }
//cette methode permet de creer une checklist
    GetChecklist() {
       if (this.loginservice.jwtokent==null) this.loginservice.loadtoken();
        this.httpclient.post<CheckList>(AdressIp.host+'fleet/save/checklist/'+this.vehicule.id_vehicule,this.chauffeur,
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            resp=>{console.log(resp),this.checklist=resp;
            let i=0;
            while (i<resp.listquestions.length) {
                this.checklist.listquestions[i].No=i+1;
                i++
            }

            }
            ,erro=>console.log(erro)
        )
    }

    AddNo(checklis:CheckList){
        let i=0;

        while (i<checklis.listquestions.length) {
            checklis.listquestions[i].No=i;
            i++;
        }
        return checklis;
    }

    validerchecklist(checklist: CheckList) {
        if (this.loginservice.jwtokent==null) this.loginservice.loadtoken();
        this.httpclient.post(AdressIp.host+'fleet/update/checklist',checklist,
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
                data=>{console.log(data),
                    this.router.navigateByUrl('/listtransportuer')
                },error1 => console.log(error1)
        )
    }

    GetAllchecklist() {
        if (this.loginservice.jwtokent==null) this.loginservice.loadtoken();
        this.httpclient.get<CheckList[]>(AdressIp.host+'fleet/all_checklist/',
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            data=>{ console.log(data),this.listchecklis=data},error1 => console.log(error1)
        )
    }

    getlistcheckfleet() {
        this.listchecklis=[];
        if (this.loginservice.jwtokent==null) this.loginservice.loadtoken();
        this.httpclient.get<CheckList[]>(AdressIp.host+'fleet/all_checklist_fleet/',
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            data=>{ console.log(data),this.listchecklis=data},error1 => console.log(error1)
        )
    }

    getlistcheckdispat() {
        this.listchecklis=[];
        if (this.loginservice.jwtokent==null) this.loginservice.loadtoken();
        this.httpclient.get<CheckList[]>(AdressIp.host+'fleet/all_checklist_dispatcheur/',
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            data=>{ console.log(data),this.listchecklis=data},error1 => console.log(error1)
        )
    }

    getlistQuestionnaire() {
        this.listquestionnaire=[];
        if (this.loginservice.jwtokent==null) this.loginservice.loadtoken();
        this.httpclient.get<Questionnaire[]>(AdressIp.host+'fleet/all_questionnaire/',
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            data=>{ console.log(data),this.listquestionnaire=data},error1 => console.log(error1)
        )
    }

    updatequestionnaire(questionnaire:Questionnaire) {
        this.listquestionnaire=[];
        if (this.loginservice.jwtokent==null) this.loginservice.loadtoken();
        this.httpclient.post<Questionnaire[]>(AdressIp.host+'fleet/update_questionnaire/',questionnaire,
            {headers:new HttpHeaders({'Authorization':this.loginservice.jwtokent})}).subscribe(
            data=>{ console.log(data),this.listquestionnaire=data},error1 => console.log(error1)
        )
    }
}