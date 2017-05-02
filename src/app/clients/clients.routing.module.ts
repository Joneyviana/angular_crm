import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from "./clients.component";
import { FormComponent } from "./form/form.component";
import { AllComponent } from "./all/all.component";
import { DetailsComponent } from "./details/details.component";

const clientsRoutes: Routes = [
  { path: '', component: ClientsComponent , children:[
      { path: 'all',  component: AllComponent },
      { path: 'new',  component: FormComponent },
      {path: 'edit/:id', component: FormComponent},
      { path: ':id', component:  DetailsComponent }] }
  
  
];

@NgModule({
  imports: [
    RouterModule.forChild(clientsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClientRoutingModule { }

