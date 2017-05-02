import { NgModule }       from '@angular/core';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from "./accounts.component";
import { AccountsRoutingModule } from "./accounts.routing.module";
import { FormComponent } from './form/form.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { UIModule } from "../commons/ui/ui.module";
import { FireService } from "../commons/services/fire.service";
import { AngularFire } from "angularfire2";

export let AccountService =
  { provide: FireService,
    useFactory: angularFire => new FireService(angularFire,"accounts"),
    deps: [AngularFire]
  };

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountsRoutingModule,
    UIModule
   ],
  declarations: [
    AccountsComponent,
    AllComponent,
    DetailsComponent,
    FormComponent
  ],
})

export class AccountsModule {}