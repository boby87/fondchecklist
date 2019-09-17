import { Component, OnInit } from '@angular/core';
import {Transporteur} from '../Model/Transporteur';
import {FleetManagerService} from '../Service/FleetManagerService';

@Component({
  selector: 'app-registertransporteur',
  templateUrl: './registertransporteur.page.html',
  styleUrls: ['./registertransporteur.page.scss'],
})
export class RegistertransporteurPage implements OnInit {

  constructor(public fleetservice:FleetManagerService) { }

  ngOnInit() {
  }
    register(val:Transporteur){
    this.fleetservice.register_transporteur(val)
    }
}
