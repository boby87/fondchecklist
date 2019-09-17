import { Component, OnInit } from '@angular/core';
import {Questionnaire} from '../Model/Questionnaire';
import {FleetManagerService} from '../Service/FleetManagerService';

@Component({
  selector: 'app-registerchecklist',
  templateUrl: './registerchecklist.page.html',
  styleUrls: ['./registerchecklist.page.scss'],
})
export class RegisterchecklistPage implements OnInit {

  question:Questionnaire=new Questionnaire();
  listquestion:Questionnaire[]=[];


  constructor(public fleetservice:FleetManagerService) { }

  ngOnInit() {
  }

  addquestion(q:Questionnaire){
    this.listquestion.push(q);
    this.question=new Questionnaire();
  }

    validerquestion() {
    this.fleetservice.registerQuestionnaire(this.listquestion);
    }
}
