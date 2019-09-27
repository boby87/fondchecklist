import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdatequestionnairePage } from './updatequestionnaire.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatequestionnairePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdatequestionnairePage]
})
export class UpdatequestionnairePageModule {}
