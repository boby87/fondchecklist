import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';
import {CheckListQuestions} from '../Model/CheckListQuestions';
import {CheckList} from '../Model/CheckList';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {

  constructor(public fleetservicecheck:FleetManagerService,public router:Router) { }

  ngOnInit() {
  }


    GotoEtatchecklist() {
        this.router.navigateByUrl("/etachecklist")
    }
}
