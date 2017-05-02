import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() resource;
  @Input() title;
  constructor() { }

  ngOnInit() {
  }
  keys() : Array<string> {
    if(this.resource !=null)
    return Object.keys(this.resource);
  }
}
