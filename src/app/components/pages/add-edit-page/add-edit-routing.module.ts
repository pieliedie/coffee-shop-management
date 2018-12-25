import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPageComponent } from './add-edit-page.component';

const routes: Routes = [
    { path: 'new', pathMatch: 'full', component: AddEditPageComponent},
    { path: 'products/update/:id', pathMatch: 'full', component: AddEditPageComponent}
  ]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AddEditRoutingModule {
  
}