import { NgModule }       from '@angular/core';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/components/button/button";

import { AngularFire } from "angularfire2";
import { LoginComponent } from "./login.component";
import { InputTextModule } from "primeng/primeng";
import { AuthService } from "../commons/services/auth.service";
import { DialogModule } from "primeng/components/dialog/dialog";
import {PasswordModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    PasswordModule
   ],
  declarations: [
    LoginComponent
  ],
  
})

export class LoginModule {}