import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { AuthService } from "./commons/services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private items: MenuItem[];
  private mostrarMenu;
  constructor(private authService:AuthService){}
  ngOnInit(){
    this.authService.logged().subscribe(
      mostraMenu => this.mostrarMenu = mostraMenu
    )
    
    
  }
  logout(){
      this.authService.logout("/login")
}
}
