import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { MenubarModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { TabViewService } from "./commons/ui/tab_view.service";
import { TabViewComponent } from './commons/ui/tab-view/tab-view.component';
import { LoginModule } from './login/login.module';
import { AuthGuardService } from "./commons/services/auth-guard.service";
import { AuthService } from "./commons/services/auth.service";
import { PanelModule } from "primeng/components/panel/panel";

export const config = {
  apiKey: "AIzaSyDfHKq9A_7ZFMQMKKfYEVK-BA04rpdXPw0",
  authDomain: "blackcrm-92b5d.firebaseapp.com",
  databaseURL: "https://blackcrm-92b5d.firebaseio.com",
  storageBucket: "blackcrm-92b5d.appspot.com",
  messagingSenderId: "566522060186"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    PanelModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
