import { Component, OnInit } from '@angular/core';
import { AuthService } from "../commons/services/auth.service";
import { Router } from "@angular/router";
import { FormControl, FormBuilder, Validators, FormGroup } from "@angular/forms";
import * as _ from "lodash";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  login = true;
  signUp = false;
  closable = false;
  draggable = false;
  constructor(
  private authService:AuthService, 
  private router:Router,
  private fb:FormBuilder) { }
   
  comparePasswords(){
  let _this = this;
  return function _comparePasswords(confirmarPassword:FormControl,){
    if (_this.signUpForm ==null){
      return null
    }
    var password = _this.signUpForm.controls["password"].value
    console.log(password)
    return confirmarPassword.value === password ? null : {
       comparePasswords : true
      }
   }
}
  ngOnInit() {
    this.loginForm = this.fb.group({
    email:["",[Validators.required,Validators.email]],
    password:["",Validators.required]})
    this.signUpForm = this.fb.group(
      _.assign({"confirmarPassword":["",
      [Validators.required,this.comparePasswords()]]},
      this.loginForm.controls
      ))
      
    
 }
  loginPassword(){
    var email = this.loginForm.controls["email"].value
    var password = this.loginForm.controls["password"].value
    this.loginForm.setValue({email:email,password:password})
    if(this.loginForm.valid){
      this.authService.login(email,password)
      .then(_=>this.router.navigate([`clients`,"all"]))
    }
  }
  createUser(){
    if(this.signUpForm.valid){
      var email = this.signUpForm.controls["email"]
      var password = this.signUpForm.controls["password"]
      this.authService.signUp(email.value,password.value)
      .then(_=>this.router.navigate([`clients`,"all"]))
    }
  }
  loginGoogle(){
    this.authService.loginWithGoogle()
    .then(_=>this.router.navigate([`clients`,"all"]))
    
  }
  loginFacebook(){
    this.authService.loginWithFacebook()
    .then(_=>this.router.navigate([`clients`,"all"]))
    
  }
  changeModal(){
    this.login = false;
    this.signUp = true;
  }

}
