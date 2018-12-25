import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPageComponent } from './menu-page.component';
import { AddEditPageComponent } from '../add-edit-page/add-edit-page.component';

const routes: Routes = [
  { path: 'products', component: MenuPageComponent},
  { path: 'update/:id', component: AddEditPageComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MenuPageRoutingModule {
  
}