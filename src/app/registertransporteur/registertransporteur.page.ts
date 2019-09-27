import { Component, OnInit } from '@angular/core';
import {Transporteur} from '../Model/Transporteur';
import {FleetManagerService} from '../Service/FleetManagerService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registertransporteur',
  templateUrl: './registertransporteur.page.html',
  styleUrls: ['./registertransporteur.page.scss'],
})
export class RegistertransporteurPage implements OnInit {

  constructor(public fleetservice:FleetManagerService,public router:Router) { }

  ngOnInit() {
  }
    register(val:Transporteur){
    this.fleetservice.register_transporteur(val);

    }
}
