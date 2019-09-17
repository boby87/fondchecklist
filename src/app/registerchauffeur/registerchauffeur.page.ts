import { Component, OnInit } from '@angular/core';
import {Chauffeur} from '../Model/Chauffeur';
import {FleetManagerService} from '../Service/FleetManagerService';

@Component({
  selector: 'app-registerchauffeur',
  templateUrl: './registerchauffeur.page.html',
  styleUrls: ['./registerchauffeur.page.scss'],
})
export class RegisterchauffeurPage implements OnInit {

  constructor(public fleetservice:FleetManagerService) { }

  ngOnInit() {
  }

    registerchauffer(value: Chauffeur) {
        this.fleetservice.register_chauffeur(value,this.fleetservice.transporteur.id_transporteur)
    }
}
