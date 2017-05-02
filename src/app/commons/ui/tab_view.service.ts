
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TabViewService {
    deleteTab;
    newTab;
    _selectTab
    constructor(){
      this.newTab =  new Subject();
      this.deleteTab = new Subject();
      this._selectTab = new Subject();
    }
    addTab(tab){
      return this.newTab.next(tab);
   }
   getNewTab():Observable<any>{
    return this.newTab.asObservable();
  }
  getSelectTab():Observable<any>{
    return this._selectTab.asObservable(); 
  }
  selectTab(index){
    return this._selectTab.next(index);  
  }
  getDeleteTab():Observable<any>{
      return this.deleteTab.asObservable();
  }
  removeTab(tab){
      return this.deleteTab.next(tab);
  }
}