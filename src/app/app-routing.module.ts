import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path:'edit', component: RegisterComponent, canActivate: [AuthGuard]},
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
