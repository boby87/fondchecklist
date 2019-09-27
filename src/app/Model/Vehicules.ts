import {CheckList} from './CheckList';


export class Vehicules {
    id_vehicule:number;
    matricule:number;
    pvtr:number;
    pvsr:number;
    immatriculaiontracteur:string;
    expirationassurance:Date;
    agetracteur:number;
    ageciterne:number;
    compartiment:string;
    expirationjaugeage:Date;
    expirationvistetechnique:Date;
    immatriculationciterne:string;
    checklists:CheckList[];
    capaciteciterne:number;
}