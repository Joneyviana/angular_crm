import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from "./accounts.component";
import { FormComponent } from "./form/form.component";
import { AllComponent } from "./all/all.component";
import { DetailsComponent } from "./details/details.component";

const AccountsRoutes: Routes = [
  { path: '', component: AccountsComponent , children:[
      { path: 'all',  component: AllComponent },
      { path: 'new',  component: FormComponent },
      {path: 'edit/:id', component: FormComponent},
      { path: ':id', component:  DetailsComponent }] }
  
  
];

@NgModule({
  imports: [
    RouterModule.forChild(AccountsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountsRoutingModule { }

