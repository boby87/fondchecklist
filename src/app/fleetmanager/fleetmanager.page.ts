import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fleetmanager',
  templateUrl: './fleetmanager.page.html',
  styleUrls: ['./fleetmanager.page.scss'],
})
export class FleetmanagerPage implements OnInit {

  public viewchecklist:boolean;
  constructor(public router:Router,public fleetcheckfleet:FleetManagerService) { }

  ngOnInit() {
      this.viewchecklist=true;
  }

    AddChecklist() {
        this.router.navigateByUrl("/registerchecklist");
    }

    GoToGereTransporteur() {
        this.router.navigateByUrl("/listtransportuer")
    }

    GoToViewChecklist() {
        this.fleetcheckfleet.getlistcheckfleet();
        this.viewchecklist=false;
    }

    GoToUpdateQuestionnaire() {
      this.router.navigateByUrl("/updatequestionnaire")
    }
}
