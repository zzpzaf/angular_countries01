import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Login1Component} from './login1/login1.component';
import {AppInfoComponent} from './app-info/app-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: Login1Component },
  { path: 'admin', component: AppInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
