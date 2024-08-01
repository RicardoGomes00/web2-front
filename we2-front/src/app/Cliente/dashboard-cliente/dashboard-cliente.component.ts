import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialClienteComponent } from '../pagina-inicial-cliente/pagina-inicial-cliente.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-cliente',
  standalone: true,
  imports: [ CommonModule, PaginaInicialClienteComponent, RouterModule ],
  templateUrl: './dashboard-cliente.component.html',
  styleUrl: './dashboard-cliente.component.css'
})
export class DashboardClienteComponent {

}
