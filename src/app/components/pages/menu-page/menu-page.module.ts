import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuPageComponent } from './menu-page.component';
import { FilterItemsComponent } from './filter-items/filter-items.component';
import { MenuPageRoutingModule } from './menu-page-routing.module';

@NgModule({
  declarations: [
    MenuItemComponent,
    MenuPageComponent,
    FilterItemsComponent,
    
  ],
  imports: [
    CommonModule,
    MenuPageRoutingModule
  ],
  exports: [
    MenuPageComponent
  ]
})
export class MenuPageModule { }
