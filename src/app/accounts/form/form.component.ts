import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms";
import * as _ from "lodash";

import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "../models/accounts";
import { FireService } from "../../commons/services/fire.service";
import { TabViewService } from "../../commons/ui/tab_view.service";
@Component({
  selector: 'accounts-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  status;
  account: Account = new Account();
  accounts: any;
  form: FormGroup;
  key;
  constructor(
    private fireService: FireService,
    private tabViewService: TabViewService,
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router
    ) {
   
    this.status = new Status();
  }
  ngOnInit() { 
    let accountForm = _.mapValues(this.account, value => [value,Validators.required] )
    this.form = this.fb.group(accountForm)
    this.route.params.subscribe(
    params => {
      if (params["id"]){
        this.fireService.findResourceById(params["id"]).subscribe(
          account => {
            this.form.setValue(_.omit(account,"$key"))
            this.key = account.$key
          }
        )
   }
    
  })
  }
   
    onSubmit(){
      if(this.form.valid)
        this.fireService.save(this.form.value,this.key)
        if(this.key){
          this.router.navigate(["/accounts",this.key])  
       }
       else {
         this.router.navigate(["/accounts","all"])
         this.tabViewService._selectTab(0)
       }
  }

}

export class Status{
  status: any[];
  constructor() {
    this.status = ["Pago","Pendente", "A Pagar","Cancelada"]
    this.status = _.map(this.status, value => ({ label: value, value: value }))
  }
}
