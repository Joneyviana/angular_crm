import { Component, OnInit, Input } from '@angular/core';
import { FireService } from "../../services/fire.service";
import { Router, ActivatedRoute } from "@angular/router";
import { TabViewService } from "../tab_view.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'tab-details',
  templateUrl: './tab-details.component.html',
  styleUrls: ['./tab-details.component.css']
})
export class TabDetailsComponent implements OnInit {
    display: boolean = false;
    id: any;
    resource: any;
    @Input() path;
    @Input() message;
    @Input() header;
    @Input() title;
    routeSubscription: Subscription;

  constructor(
    private route:ActivatedRoute,
    private fireService:FireService,
    private router:Router,
    private tabView: TabViewService,
    ) {

      this.routeSubscription = this.route.params.subscribe(
    params => {
    this.fireService.findResourceById(params["id"]).subscribe(
      resource => this.resource = resource
    )
    this.id = params["id"] 
      
}
    
  )
    }

  ngOnInit() {
   if(this.resource !=null)
     this.tabView.addTab({name:this.resource[this.title], id:this.id}) 
   else 
     this.router.navigate([`/${this.path}`,"all"])
}

  ngOnDestroy(){
    this.routeSubscription.unsubscribe()  
  }
  editar(){
    this.router.navigate([`/${this.path}/`,"edit",this.resource.$key])
  }
  showDialog(){
    this.display =true;
  }
  fadeDialog(){
    this.display =false;
  }
  deletar(){
    this.fireService.deletar(this.resource)
    this.fadeDialog()
    this.tabView.removeTab(this.id)
    this.router.navigate([`/${this.path}`,"all"])
    
  }
}
