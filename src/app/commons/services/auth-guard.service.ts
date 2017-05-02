import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2";
import { Router, CanLoad, Route } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanLoad {
   
  constructor(private auth: AngularFireAuth, 
  private router:Router,
  private authService:AuthService) { }

   canLoad(route: Route): boolean | Observable<boolean>{
      
      return Observable.from(this.auth)
      .take(1)
      .map(state => {
        this.authService.newUser(state)
        return !!state})
      .do(authenticated =>this.authService.checkUser(authenticated))
    }
}
