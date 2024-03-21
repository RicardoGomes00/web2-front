import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './seguranca/login/login.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { OrderOnlineComponent } from './order-online/order-online.component';

export const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'autocadastro', component:AutocadastroComponent},
  {path: 'order-online', component: OrderOnlineComponent},
  {path:'**', redirectTo:'login'}
];
