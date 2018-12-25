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

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    if(id !== null) {
      const item = this.itemService.loadItem(+id);
      this.itemId = item.id;
      this.productForm.setValue({
        itemName: item.itemName,
        price: item.price,
        type: item.type
      })
    }
  }

  onSubmit() {
    if(this.itemId) {
      this.itemService.updateItem({
        id: this.itemId,
        ...this.productForm.value
      })
      this.itemId = null;
    }
    else {
      this.itemService.addItem({
        id: Math.random() * 100,
        ...this.productForm.value
      });
    }
    this.router.navigate(['/products']);
  }
}
