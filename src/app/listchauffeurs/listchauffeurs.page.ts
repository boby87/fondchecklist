import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';
import {Router} from '@angular/router';
import {Chauffeur} from '../Model/Chauffeur';

@Component({
  selector: 'app-listchauffeurs',
  templateUrl: './listchauffeurs.page.html',
  styleUrls: ['./listchauffeurs.page.scss'],
})
export class ListchauffeursPage implements OnInit {

  constructor(public fleelservicech:FleetManagerService,public router:Router) { }

  ngOnInit() {
  }
    Gochecklist(c:Chauffeur) {
    this.fleelservicech.chauffeur=c;
    this.fleelservicech.GetChecklist();
        this.router.navigateByUrl("/checklist");
    }
}
