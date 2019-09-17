import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterchauffeurPage } from './registerchauffeur.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterchauffeurPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterchauffeurPage]
})
export class RegisterchauffeurPageModule {}
