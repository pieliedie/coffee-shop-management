import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuPageComponent } from './menu-page.component';

@NgModule({
  declarations: [
    MenuItemComponent,
    MenuPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuPageComponent
  ]
})
export class MenuPageModule { }
