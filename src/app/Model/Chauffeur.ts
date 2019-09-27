import {Transporteur} from "./Transporteur";
import {Vehicules} from './Vehicules';

export class Chauffeur {
   id_chaufeur:number;
   nomchauffeur:string;
   permis:string;
   datedelivrance:Date;
   dateexpire:Date;
   phone:number;
   transporteurs:Transporteur;
   vehiculesList:Vehicules[];
   dateexprirationscdp:Date;
}