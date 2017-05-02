import { Component, OnInit, Input, AfterContentInit, DoCheck, AfterViewInit, OnChanges, ContentChildren, ViewChildren } from '@angular/core';
import * as _ from "lodash";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { TabViewService } from "../tab_view.service";
import { TabView } from "primeng/components/tabview/tabview";


@Component({
  selector: 'tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit{
  activeIndex = 0;
  newTabSubscription: Subscription;
  @Input() items;
  @Input() path;
  @Input() home;
  constructor(
    private router: Router,
    private tabView: TabViewService
    ){}
  ngOnInit() {
    this.items = _.map(this.items,item=>_.assign({closable:false},item))
    this.newTabSubscription = this.tabView.getNewTab().subscribe(
      tab => {
        var item = _.findIndex(this.items,value=>value["routerLink"][0]==[this.path + tab.id][0])
        if(item == -1){
          this.items.push({label:tab.name, routerLink:[this.path + tab.id],closable:true})
          this.activeIndex = this.items.length -1
      }
      else {
        this.activeIndex = item;
      }
    }
    )
    this.tabView.getSelectTab().subscribe(
      index => this.activeIndex = index
    )
    this.tabView.getDeleteTab().subscribe(
      id => {
        this.items = _.filter(this.items, item => item["routerLink"][0] != [this.path + id][0])
      })
    }
  onTabChange(index){
    this.activeIndex = index
    this.router.navigate(this.items[index].routerLink)
  }
  handleClose($event,index){
     this.items.splice(index, 1)
     this.activeIndex = 0
     $event.stopPropagation();
     this.router.navigate([this.home])
     
  }
  ngOnDestroy(){
    this.newTabSubscription.unsubscribe()
  }

}
