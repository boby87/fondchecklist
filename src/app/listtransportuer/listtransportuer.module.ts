import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListtransportuerPage } from './listtransportuer.page';

const routes: Routes = [
  {
    path: '',
    component: ListtransportuerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListtransportuerPage]
})
export class ListtransportuerPageModule {}
