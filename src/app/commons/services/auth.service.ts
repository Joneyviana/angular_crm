import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from "angularfire2";
import { Subject, BehaviorSubject } from "rxjs/Rx";
import { Router } from "@angular/router";


@Injectable()
export class AuthService {
  _currentUser =  new BehaviorSubject(false);
  _logged = new BehaviorSubject(false)
  constructor(
    private af: AngularFire,
    private router: Router
  ) { }

  signUp(email: string, password: string) {
    var creds: any = { email: email, password: password };
    return this.af.auth.createUser(creds);
  }
  newUser(user){
    this._currentUser.next(user)
  }
  checkUser(user, redirectUrl = "/login") {
    if (!user)
      this.router.navigate([redirectUrl])
    else {
      this._logged.next(true)
    }

  }
  login(email: string, password: string): firebase.Promise<any> {
    var creds: any = { email: email, password: password };
    return this.af.auth.login(creds, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then(_ => this._logged.next(true));
  }

  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then(_ => this._logged.next(true))
  }

  loginWithFacebook() {
    return this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then(_ => this._logged.next(true))
  }
  logout(redirectUrl) {

    return this.af.auth.logout()
      .then(_ => {
        this._logged.next(false)
        this.router.navigate([redirectUrl])
      }
      )
  }
  logged() {
    return this._logged
  }
  currentUser(user){
    return this._currentUser.asObservable() }
}
