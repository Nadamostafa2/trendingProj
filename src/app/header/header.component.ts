import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
showMenueItem:boolean=true;
  constructor(private _Router:Router) { 
    let token=localStorage.getItem("token");
    if (token)
    this.showMenueItem=true;
    else
    this.showMenueItem=false;
  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("token");
    this._Router.navigateByUrl("login");
    
  }

}
