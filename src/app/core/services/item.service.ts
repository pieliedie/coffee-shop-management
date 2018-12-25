import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces';

@Injectable()
export class ItemService {
  items: Array<Item> = [{
    id: 0,
    itemName: 'espresso',
    price: 35000,
    type: 'hot drinks'
  },
  {
    id: 1,
    itemName: 'americano',
    price: 25000,
    type: 'hot drinks'
  },
  {
    id: 2,
    itemName: 'latte',
    price: 30000,
    type: 'hot drinks'
  },
  {
    id: 3,
    itemName: 'chocolate',
    price: 40000,
    type: 'hot drinks'
  }];

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
    const itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
  }

  updateItem(item: Item): void {
    this.items.forEach(i => {
      if (i.id === item.id) {
        i.itemName = item.itemName;
        i.price = item.price;
      }
    })
  }
}
