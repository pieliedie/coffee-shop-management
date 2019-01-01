import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPageComponent } from './add-edit-page.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
    { path: 'new',
      pathMatch: 'full',
      component: AddEditPageComponent,
      canActivate: [AuthGuard]
    },
    { path: 'products/update/:id',
      pathMatch: 'full',
      component: AddEditPageComponent,
      canActivate: [AuthGuard]
    }
  ]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AddEditRoutingModule {
  
}