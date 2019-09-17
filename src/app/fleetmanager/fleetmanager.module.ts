import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FleetmanagerPage } from './fleetmanager.page';

const routes: Routes = [
  {
    path: '',
    component: FleetmanagerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FleetmanagerPage]
})
export class FleetmanagerPageModule {}
