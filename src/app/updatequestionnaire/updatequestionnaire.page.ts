import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';
import {Router} from '@angular/router';
import {Questionnaire} from '../Model/Questionnaire';

@Component({
  selector: 'app-updatequestionnaire',
  templateUrl: './updatequestionnaire.page.html',
  styleUrls: ['./updatequestionnaire.page.scss'],
})
export class UpdatequestionnairePage implements OnInit {
public do_update:boolean;
public questionnaire:Questionnaire;
  constructor(public fleetserviceupdate:FleetManagerService,public router:Router) { }

  ngOnInit() {
    this.fleetserviceupdate.getlistQuestionnaire();
    this.do_update=true
  }

    viwquestion(q: Questionnaire) {
        this.questionnaire=q;
        this.do_update=false;
    }
    updatequestionnaire(questionnaire:Questionnaire){
    this.fleetserviceupdate.updatequestionnaire(questionnaire);
    this.do_update=true;
    }
}
