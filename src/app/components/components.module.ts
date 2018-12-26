import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer-comp.component';
import { MenuPageModule } from './pages/menu-page/menu-page.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ItemService } from '../core/services/item.service';
import { AddEditPageModule } from './pages/add-edit-page/add-edit-page.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { DirectivesModule } from '../core/directives/directives.module';

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      DetailsPageComponent,
      HomePageComponent,
      SignInPageComponent
    ],
    imports: [
      CommonModule,
      MenuPageModule,
      AddEditPageModule,
      RouterModule,
      DirectivesModule
    ],
    providers: [ItemService],
    exports: [
      HeaderComponent,
      FooterComponent,
      DetailsPageComponent,
      MenuPageModule
    ]
  })
  export class ComponentsModule { }