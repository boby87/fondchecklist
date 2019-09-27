import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.page.html',
  styleUrls: ['./vehicules.page.scss'],
})
export class VehiculesPage implements OnInit {

  constructor(public fleetservice:FleetManagerService) { }

  ngOnInit() {
    this.fleetservice.Allvehicule(this.fleetservice.transporteur.id_transporteur);
  }

}
