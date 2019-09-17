import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Service/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public loginservice:LoginService) { }

  ngOnInit() {
  }
    onLogin(user) {
        console.log(user);
        this.loginservice.login(user);
    }
}
