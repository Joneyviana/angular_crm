import { Component, OnInit, OnDestroy, forwardRef } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import * as _ from "lodash";
import { Router } from "@angular/router";

import { TabViewService } from "../commons/ui/tab_view.service";
import { ClientService } from "./clients.module";

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [forwardRef(() =>ClientService)]
})
export class ClientsComponent implements OnInit{
  private items;
  constructor(private router:Router){}
  ngOnInit() {
    this.items = [
      { label: 'all', routerLink: ['clients/all']},
      {label:'new', routerLink:['clients/new']}
      
    ];
    this.router.navigate(["/clients/all"])

  }
  
}
