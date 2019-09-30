import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';
import {Vehicules} from '../Model/Vehicules';
import {Chauffeur} from '../Model/Chauffeur';
import {Transporteur} from '../Model/Transporteur';

@Component({
  selector: 'app-updateall',
  templateUrl: './updateall.page.html',
  styleUrls: ['./updateall.page.scss'],
})
export class UpdateallPage implements OnInit {

  public vehicule:Vehicules=new Vehicules();
  public chauffeur:Chauffeur=new Chauffeur();
  public transporteur:Transporteur=new Transporteur();
  constructor(public fleetserviceupda:FleetManagerService) { }

  ngOnInit() {
    if (this.fleetserviceupda.vehicule!=null){
        this.vehicule=this.fleetserviceupda.vehicule; 
    }
      if (this.fleetserviceupda.transporteur!=null){
          this.transporteur=this.fleetserviceupda.transporteur;
      }
      if (this.fleetserviceupda.chauffeur!=null){
          this.chauffeur=this.fleetserviceupda.chauffeur;
      }
  }

    UpdateChauffeur(chauffeur: Chauffeur) {
        this.fleetserviceupda.UpdateChauffeur(chauffeur)
    }

    UpdateVehiculetr(vehicule: Vehicules) {
        this.fleetserviceupda.UpdateVehicule(vehicule)
    }

    UpdateTransporteurss(transporteur: Transporteur) {
        this.fleetserviceupda.UpdateTransporteurola(transporteur);
    }
}
