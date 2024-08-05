import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ClassListComponent} from '../app/components/class-list/class-list.component';
import {ClassFormComponent} from './components/class-form/class-form.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ClassListComponent
  },
  // {
  //   path:'clases',
  //   component: ClassListComponent
  // },
  {
    path: 'clases/add',
    component: ClassFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clases/edit/:id',
    component: ClassFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signIn',
    loadChildren: () => import('./sign/sign.module').then(x => x.SignModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
