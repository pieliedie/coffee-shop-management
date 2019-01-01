import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuPageComponent } from './menu-page.component';
import { FilterItemsComponent } from './filter-items/filter-items.component';
import { MenuPageRoutingModule } from './menu-page-routing.module';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

@NgModule({
  declarations: [
    MenuItemComponent,
    MenuPageComponent,
    FilterItemsComponent
  ],
  imports: [
    CommonModule,
    MenuPageRoutingModule,
    FormsModule,
    DirectivesModule
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    MenuPageComponent
  ]
})
export class MenuPageModule { }
