import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Array<Item> = [];
  constructor() { }
  loadItems() : Array<Item> {
    return this.items;
  }

  loadItem(id: number): Item {
    return this.items.filter(item => item.id === id)[0];
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  removeItem(item: Item): void {

  }

  editItem(item: Item): void {
    this.items.forEach(i => {
      if (i.id === item.id) {
        i.itemName = item.itemName;
        i.price = item.price;
      }
    })
  }
}
