import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AuthGuardService } from "./commons/services/auth-guard.service";
import { LoginComponent } from "./login/login.component";


const appRoutes: Routes = [
     
    {
      path:"clients",
      loadChildren:"app/clients/clients.module#ClientsModule",
      canLoad: [AuthGuardService]  
  },
    {
    path:"accounts",
      loadChildren:"app/accounts/accounts.module#AccountsModule",
      canLoad: [AuthGuardService] 
    },
    {
      path:"login",component:LoginComponent 
    },
    { path: '', redirectTo: '/clients/all', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }