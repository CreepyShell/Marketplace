import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login.component';
import { RegisterComponent } from './components/register-component/register.component';
import { MainpageComponent } from './components/mainpage-component/mainpage.componen';
import { AddofferComponent } from './components/addoffer-component/addoffer.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'addOffer', component: AddofferComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
  { path: '', component: MainpageComponent },
];
