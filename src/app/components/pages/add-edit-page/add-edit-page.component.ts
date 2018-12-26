import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/core/services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-add-edit-page',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.css']
})
export class AddEditPageComponent implements OnInit {
  productForm = new FormGroup({
    itemName: new FormControl(''),
    price: new FormControl(''),
    type: new FormControl('')
  });

  itemId: number;
  items: Item[];

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    if(id !== null) {
      const item = this.itemService.loadItem(+id).subscribe(item => {
        this.itemId = item.id;
        this.productForm.setValue({
          itemName: item.itemName,
          price: item.price,
          type: item.type
        })
      });
    }

    this.itemService.loadItems().subscribe(items => {
      this.items = items;
    })
  }

  onSubmit() {
    if(this.itemId) {
      this.itemService.updateItem({
        id: this.itemId,
        ...this.productForm.value
      }).subscribe( _ => {
        console.log('Update successfully');
        
        this.itemId = null;
        this.router.navigate(['/products']);
      })
    }
    else {
      this.itemService.addItem({
        id: this.items[this.items.length - 1].id + 1,
        ...this.productForm.value
      }).subscribe( _ => {
        this.router.navigate(['/products']);
      });
    }
  }
}
