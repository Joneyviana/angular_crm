import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FireService } from "../../commons/services/fire.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  clients: any[];
  selectedClient;
  constructor(
    private fireService:FireService,
    private router:Router
  ) { 
    this.fireService.getResources().subscribe(
      val => {
        this.clients = val
      })
    
  }

  ngOnInit() {
 }
 
 onRowSelect(event){
   this.router.navigate(["/clients",this.selectedClient.$key])
 }
}
