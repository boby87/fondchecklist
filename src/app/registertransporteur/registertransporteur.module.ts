import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistertransporteurPage } from './registertransporteur.page';

const routes: Routes = [
  {
    path: '',
    component: RegistertransporteurPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistertransporteurPage]
})
export class RegistertransporteurPageModule {}
