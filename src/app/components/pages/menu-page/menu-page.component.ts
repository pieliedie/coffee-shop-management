import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/services/item.service';
import { Item } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  menu: Item[] = [];
  filteredItems: Item[] = [];

  constructor(private itemService: ItemService) { }

  loadItems(): void {
    this.itemService.loadItems()
     .subscribe(items => {
       this.menu = items;
       this.filteredItems = items;
     });
  }

  ngOnInit() {
    this.loadItems();
  }

  deleteItem(itemId: number): void {
    this.itemService.removeItem(itemId).subscribe(_ => {
      this.loadItems();
    });
  }

  filterItems(data: string): void {
    console.log(data);
    
    if (data) {
      this.filteredItems = this.menu.filter((item: Item) => {
          return item.itemName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                item.type.toLowerCase().indexOf(data.toLowerCase()) > -1
      });
    } else {
      this.filteredItems = this.menu;
    }
  }
}
