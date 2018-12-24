import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  menu: Array<Object> = [
    {
      id: 0,
      itemName: 'Espresso',
      price: 35000
    },
    {
      id: 1,
      itemName: 'Americano',
      price: 25000
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
