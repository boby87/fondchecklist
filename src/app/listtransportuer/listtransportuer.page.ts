import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';
import {Transporteur} from '../Model/Transporteur';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listtransportuer',
  templateUrl: './listtransportuer.page.html',
  styleUrls: ['./listtransportuer.page.scss'],
})
export class ListtransportuerPage implements OnInit {

  constructor(public fleetservice:FleetManagerService,public router:Router) { }

  ngOnInit() {
    this.fleetservice.Alltransporteur();
  }

    GoToTransporte(t: Transporteur) {
    this.fleetservice.transporteur=t;
    this.router.navigateByUrl("/transporteur")
    }
}
