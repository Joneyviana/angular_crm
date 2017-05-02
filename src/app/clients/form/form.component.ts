import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import * as _ from "lodash";

import { FireService } from "../../commons/services/fire.service";
import { Client } from "../models/client";
import { CepService } from "../services/cep.service";
import { TabViewService } from "../../commons/ui/tab_view.service";

@Component({
  selector: 'client-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  client: Client = new Client();
  clients: any;
  form: FormGroup;
  estados;
  key;
  
  constructor(
    private cepService: CepService,
    private fireService: FireService,
    private tabViewService : TabViewService,
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router
    ) {
   
    this.estados = new Estados();
  }
  
  ngOnInit() { 
    let clientForm = _.mapValues(this.client, value => value )
    console.log(clientForm)
    this.form = this.fb.group(this.client)
    
    this.route.params.subscribe(
    params => {
      if (params["id"]){
        this.fireService.findResourceById(params["id"]).subscribe(
          client => {
            this.form.setValue(_.omit(client,"$key"))
            this.key = client.$key
          }
        )
   }
    
  })
  }
  
  searchCep(value: string) {
    this.cepService.search(value).subscribe(
      addressCep => {
        var address = _.pick(addressCep, [
          "localidade","logradouro",
          "bairro","complemento","uf"
        ])
        this.form.patchValue(address)
      }
    )
  
    
  }
    
    onSubmit(){
      if(this.form.valid)
        this.fireService.save(this.form.value,this.key)
      if(this.key){
        this.router.navigate(["/clients",this.key])  
     }
     else {
       this.tabViewService.selectTab(0)
       this.router.navigate(["/clients","all"])
       
     }
  }

}

export class Estados {
  uf: any[];
  constructor() {
    this.uf = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT",
      "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"]
    this.uf = _.map(this.uf, value => ({ label: value, value: value }))
  }
}
