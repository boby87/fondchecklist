import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fleetmanager',
  templateUrl: './fleetmanager.page.html',
  styleUrls: ['./fleetmanager.page.scss'],
})
export class FleetmanagerPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

    AllTransporteur() {
        this.router.navigateByUrl("/listtransportuer")
    }

    GoToAddTransporteur() {
        this.router.navigateByUrl("/registertransporteur")
    }

    AllVehicule() {
        this.router.navigateByUrl("/vehicules")
    }
}
