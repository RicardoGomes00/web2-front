import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(
    private router: Router,
  ) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  public mostrarCliente: boolean = true;
  public mostrarFuncionario: boolean = true;
  public ncadastrado: boolean = true;
}
