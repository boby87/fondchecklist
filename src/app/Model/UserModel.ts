import {CheckList} from './CheckList';


export class UserModel {
    id_user:number;
    firstname:string;
    username:string;
    lastname:string;
    email:string;
    password:string;
    checkLists:CheckList;
    roles:string[];
}