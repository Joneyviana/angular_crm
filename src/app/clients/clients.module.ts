import { NgModule }       from '@angular/core';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ClientsComponent } from "./clients.component";
import { FireService } from "../commons/services/fire.service";
import { ClientRoutingModule } from "./clients.routing.module";
import { FormComponent } from './form/form.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { UIModule } from "../commons/ui/ui.module";
import { CepService } from "./services/cep.service";
import { AngularFire } from "angularfire2";

export let ClientService =
  { provide: FireService,
    useFactory: angularFire => new FireService(angularFire,"clients"),
    deps: [AngularFire]
  };

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    UIModule
   ],
  declarations: [
    ClientsComponent,
    FormComponent,
    AllComponent,
    DetailsComponent,
  ],
  providers: [
    CepService
  ]
})

export class ClientsModule {}




   
