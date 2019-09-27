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

  constructor(public fleelservicetra:FleetManagerService,public router:Router,public loginservice:LoginService) { }

  ngOnInit() {
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
}
