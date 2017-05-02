import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FireService } from "../../commons/services/fire.service";

@Component({
  selector: 'account-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  ols:any;
  accounts: any[];
  selectedAccount;
  constructor(
    private fireService:FireService,
    private router:Router
  ) { 
    this.fireService.getResources().subscribe(
      val => {
        this.accounts = val
      })
    
  }

  ngOnInit() {
 }
 
 onRowSelect(event){
   this.router.navigate(["/accounts",this.selectedAccount.$key])
 }
}
