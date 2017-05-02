import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable, AngularFireDatabase } from 'angularfire2';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { FormControl } from "@angular/forms/forms";

@Injectable()
export class FireService {
  resources:FirebaseListObservable<any[]>;
  db: AngularFireDatabase;
  constructor(
    private af: AngularFire,
    private path
    ) { 
    this.db = this.af.database
    this.resources = this.db.list(this.path);
    
  }

  
  getResources(){
    return this.resources;
  }
  findResourceById(resourceId:string){
    return this.db.object(`${this.path}/${resourceId}`)
  }
  save(resource:FormControl,key){
    if(key){
      this.resources.update(key,resource)
    }
    else{
    this.resources.push(resource);
    }  
 }

  deletar(resource){
    this.resources.remove(resource);
  }
}
