import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@NgModule({
  declarations: [ LoginPageComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  exports: [ LoginPageComponent ]
})
export class LoginPageModule { }
