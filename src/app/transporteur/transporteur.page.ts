import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';
import {Router} from '@angular/router';
import {LoginService} from '../Service/LoginService';
import {Vehicules} from '../Model/Vehicules';

@Component({
  selector: 'app-transporteur',
  templateUrl: './transporteur.page.html',
  styleUrls: ['./transporteur.page.scss'],
})
export class TransporteurPage implements OnInit {

    public is_chauffeur:boolean;
    public is_vehicule:boolean;

  constructor(public fleelservicetra:FleetManagerService,public router:Router,public loginservice:LoginService) { }

  ngOnInit() {
      this.fleelservicetra.is_update_vehic=false;
      this.fleelservicetra.is_update_trans=false;
      this.fleelservicetra.is_update_trans=false;
  }


    AddVehicule() {
        this.router.navigateByUrl("/registervehicule");
    }

    AddChauffeur() {
        this.router.navigateByUrl("/registerchauffeur");
    }

    UpdateTransporteur() {
        this.router.navigateByUrl("/shetransporteur");
    }


    GotoChauffeur(v:Vehicules){
      this.fleelservicetra.vehicule=v;
        this.router.navigateByUrl("/listchauffeurs");
    }

    AllVehicule() {
        this.is_chauffeur=false;
        this.is_vehicule=true;
    }

    AllChauffeur() {
        this.is_vehicule=false;
        this.is_chauffeur=true;
    }

    GoToUpdateVehicule(v) {
        this.fleelservicetra.is_update_vehic=true;
        this.fleelservicetra.is_update_trans=false;
        this.fleelservicetra.is_update_chau=false;
        this.fleelservicetra.vehicule=v;
        this.router.navigateByUrl("/updateall");
    }
    GoToUpdateChauffeur(c) {
        this.fleelservicetra.is_update_vehic=false;
        this.fleelservicetra.is_update_trans=false;
        this.fleelservicetra.is_update_chau=true;
        this.fleelservicetra.chauffeur=c;
        this.router.navigateByUrl("/updateall");
    }
    GoToUpdateTransporteur() {
        this.fleelservicetra.is_update_vehic=false;
        this.fleelservicetra.is_update_chau=false;
        this.fleelservicetra.is_update_trans=true;
        this.router.navigateByUrl("/updateall");
    }
}
