import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';
import {CheckListQuestions} from '../Model/CheckListQuestions';
import {CheckList} from '../Model/CheckList';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {

  constructor(public fleetservicecheck:FleetManagerService) { }

  ngOnInit() {
  }

  upchecklist(checklist:CheckList){
     let i=0;
     let status:string;
     let note=0;
     while (i<checklist.listquestions.length){
       if (checklist.listquestions[i].etatquestion=="bloquant"&& checklist.listquestions[i].conforme=="oui"){
         status="pas conforme";
           checklist.status="il y'a: "+i;
       }
       if (checklist.listquestions[i].conforme=="oui"){
         note +=1;
       }
       i++;
     }
     if (status=="pas conforme"){
         alert(status);
     }else if (note<(80*checklist.listquestions.length)/100){
       status="pas conforme"
         alert(status);
         checklist.note=note;
     }else {
         alert("conforme")
     }

     this.fleetservicecheck.validerchecklist(checklist);
  }
}
