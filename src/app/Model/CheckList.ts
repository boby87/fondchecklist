import {Vehicules} from "./Vehicules";
import {CheckListQuestions} from "./CheckListQuestions";
import {UserModel} from "./UserModel";

export class CheckList {

    id_check:number;
    designation:string;
    vehicules:Vehicules;
    listquestions:CheckListQuestions[];
    appUser:UserModel;

}