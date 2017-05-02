import { Component, OnInit, forwardRef } from '@angular/core';
import { AccountService } from "./accounts.module";
import { Router } from "@angular/router";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [forwardRef(() =>AccountService)]
})
export class AccountsComponent implements OnInit {
  private items;
  constructor(private router:Router) { }

  ngOnInit() {
    this.items = [
      { label: 'all', routerLink: ['accounts/all']},
      {label:'new', routerLink:['accounts/new']}]
      this.router.navigate(["/accounts/all"])
  }
   
}
