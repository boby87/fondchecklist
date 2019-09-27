import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'fleetmanager', loadChildren: './fleetmanager/fleetmanager.module#FleetmanagerPageModule' },
  { path: 'dispatcher', loadChildren: './dispatcher/dispatcher.module#DispatcherPageModule' },
  { path: 'truckinspecteur', loadChildren: './truckinspecteur/truckinspecteur.module#TruckinspecteurPageModule' },
  { path: 'managercsl', loadChildren: './managercsl/managercsl.module#ManagercslPageModule' },
  { path: 'shetransporteur', loadChildren: './shetransporteur/shetransporteur.module#ShetransporteurPageModule' },
  { path: 'registertransporteur', loadChildren: './registertransporteur/registertransporteur.module#RegistertransporteurPageModule' },
  { path: 'registervehicule', loadChildren: './registervehicule/registervehicule.module#RegistervehiculePageModule' },
  { path: 'vehicules', loadChildren: './vehicules/vehicules.module#VehiculesPageModule' },
  { path: 'listchauffeurs', loadChildren: './listchauffeurs/listchauffeurs.module#ListchauffeursPageModule' },
  { path: 'listtransportuer', loadChildren: './listtransportuer/listtransportuer.module#ListtransportuerPageModule' },
  { path: 'transporteur', loadChildren: './transporteur/transporteur.module#TransporteurPageModule' },
  { path: 'registerchauffeur', loadChildren: './registerchauffeur/registerchauffeur.module#RegisterchauffeurPageModule' },
  { path: 'checklist', loadChildren: './checklist/checklist.module#ChecklistPageModule' },
  { path: 'registerchecklist', loadChildren: './registerchecklist/registerchecklist.module#RegisterchecklistPageModule' },
  { path: 'etachecklist', loadChildren: './etachecklist/etachecklist.module#EtachecklistPageModule' },
  { path: 'updatequestionnaire', loadChildren: './updatequestionnaire/updatequestionnaire.module#UpdatequestionnairePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
