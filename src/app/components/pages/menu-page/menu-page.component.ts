import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/services/item.service';
import { Item } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  menu: Array<Object> ;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.menu = this.itemService.loadItems();
    console.log(this.menu);
  }

  deleteItem(item: Item): void {
    this.itemService.removeItem(item);
  }
}
