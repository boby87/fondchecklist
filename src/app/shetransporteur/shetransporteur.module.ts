import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShetransporteurPage } from './shetransporteur.page';

const routes: Routes = [
  {
    path: '',
    component: ShetransporteurPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShetransporteurPage]
})
export class ShetransporteurPageModule {}
