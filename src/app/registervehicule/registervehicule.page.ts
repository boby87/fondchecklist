import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';
import {Vehicules} from '../Model/Vehicules';

@Component({
  selector: 'app-registervehicule',
  templateUrl: './registervehicule.page.html',
  styleUrls: ['./registervehicule.page.scss'],
})
export class RegistervehiculePage implements OnInit {

  constructor(public fleetservice:FleetManagerService) { }

  ngOnInit() {
  }

    registervehicule(value: Vehicules) {
    console.log(value);
     this.fleetservice.register_vehicule(value,this.fleetservice.transporteur.id_transporteur)
    }
}
