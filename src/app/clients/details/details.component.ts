import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";

import { TabViewService } from "../../commons/ui/tab_view.service";
import { FireService } from "../../commons/services/fire.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  
  constructor() {}

  ngOnInit() {}
    
  
  
}
