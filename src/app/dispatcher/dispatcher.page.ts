import { Component, OnInit } from '@angular/core';
import {FleetManagerService} from '../Service/FleetManagerService';

@Component({
  selector: 'app-dispatcher',
  templateUrl: './dispatcher.page.html',
  styleUrls: ['./dispatcher.page.scss'],
})
export class DispatcherPage implements OnInit {

  constructor(public fleetchecklisdispa:FleetManagerService) { }

  ngOnInit() {
    this.fleetchecklisdispa.GetAllchecklist();
  }

}
