import {CheckList} from './CheckList';


export class Vehicules {
    id_vehicule:number;
    matricule:number;
    pvtr:number;
    pvsr:number;
    immatriculaiontracteur:string;
    assurance:string;
    agetracteur:number;
    ageciterne:number;
    immatriculationciterne:string;
    checklists:CheckList[];
}