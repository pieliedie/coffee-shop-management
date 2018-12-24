import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer-comp.component';
import { MenuPageModule } from './pages/menu-page/menu-page.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { FilterItemsComponent } from './header/filter-items/filter-items.component';
import { AddEditModalComponent } from './modals/add-edit-modal/add-edit-modal.component';
 
@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      DetailsPageComponent,
      FilterItemsComponent,
      AddEditModalComponent
    ],
    imports: [CommonModule, MenuPageModule],
    providers: [],
    exports: [
      HeaderComponent,
      FooterComponent,
      DetailsPageComponent,
      MenuPageModule
    ]
  })
  export class ComponentsModule { }