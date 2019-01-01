import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPageComponent } from './menu-page.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: 'products', component: MenuPageComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MenuPageRoutingModule {
  
}