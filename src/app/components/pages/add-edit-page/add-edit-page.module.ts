import { NgModule } from '@angular/core';
import { AddEditPageComponent } from './add-edit-page.component';
import { AddEditRoutingModule } from './add-edit-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddEditPageComponent
  ],
  imports: [
    AddEditRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddEditPageComponent
  ]
})

export class AddEditPageModule { }
