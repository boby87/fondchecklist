import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {

  constructor(public fleetservicecheck:FleetManagerService) { }

  ngOnInit() {
  }


}
