import { Component, OnInit } from '@angular/core';
import {CheckList} from '../Model/CheckList';
import {FleetManagerService} from '../Service/FleetManagerService';

@Component({
  selector: 'app-etachecklist',
  templateUrl: './etachecklist.page.html',
  styleUrls: ['./etachecklist.page.scss'],
})
export class EtachecklistPage implements OnInit {
public is_conforme:boolean=true;
  constructor(public fleetserviceetatcheck:FleetManagerService) { }

  ngOnInit() {
  }
    upchecklist(checklist:CheckList){
        let i=0;
        let status:string;
        let note=0;
        while (i<checklist.listquestions.length){
          if (checklist.listquestions[i].conforme==undefined) {
            this.is_conforme=false;
          }else {
              this.is_conforme=true
          }

            if (checklist.listquestions[i].etatquestion=="bloquant"&& checklist.listquestions[i].conforme=="non"){
                status="pas conforme";
            }
            if (checklist.listquestions[i].conforme=="oui"){
                checklist.note +=1;
            }
            i++;
        }
        if (status=="pas conforme"){
            alert(status);
        }else if (checklist.note<16){
            status="pas conforme"
            alert(status);

        }else {
            status="conforme";
            alert(status)
        }
        if (checklist.namecheckeur==undefined) {
          this.is_conforme=false;
        }else {
            this.is_conforme=true;
        }
        if (this.is_conforme==true) {
            checklist.status=status;
            this.fleetserviceetatcheck.validerchecklist(checklist);
        }

    }
}
