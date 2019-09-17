import {Chauffeur} from './Chauffeur';
import {Vehicules} from './Vehicules';


export class Transporteur {
    id_transporteur:number;
    nomtransporteur:string;
    dateexprirationscdp:Date;
    chauffeurlist:Chauffeur[];
    vehiculesList:Vehicules[];
}