import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistervehiculePage } from './registervehicule.page';

const routes: Routes = [
  {
    path: '',
    component: RegistervehiculePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistervehiculePage]
})
export class RegistervehiculePageModule {}
