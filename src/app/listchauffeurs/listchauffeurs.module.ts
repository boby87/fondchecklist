import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListchauffeursPage } from './listchauffeurs.page';

const routes: Routes = [
  {
    path: '',
    component: ListchauffeursPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListchauffeursPage]
})
export class ListchauffeursPageModule {}
