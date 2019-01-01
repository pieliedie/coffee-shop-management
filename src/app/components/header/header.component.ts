import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "header-comp",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class HeaderComponent implements OnInit {
    isLoggedIn: boolean = !!localStorage.getItem('currentUser');
  
    navigationItems: Array<Object> = [
      {
        path: 'home',
        name: 'Home'
      },
      {
        path: 'products',
        name: 'Menu'
      }
    ];

    constructor(private router: Router) {}
    
    ngOnInit(){}

    handleSignout() {
      if (localStorage.getItem('currentUser')) {
        localStorage.removeItem('currentUser');
        this.isLoggedIn = false;
        this.router.navigate(['/home']);
      }
    }
}