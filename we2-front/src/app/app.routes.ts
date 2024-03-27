import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './seguranca/login/login.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { OrderOnlineComponent } from './order-online/order-online.component';

export const routes: Routes = [
  {path: 'login', component:LoginComponent, pathMatch: 'full' },
  {path: 'autocadastro', component:AutocadastroComponent, pathMatch: 'full' },
  {path: 'order-online', component: OrderOnlineComponent, pathMatch: 'full' },
  {path:'**', redirectTo:'', pathMatch: 'full' }
];
