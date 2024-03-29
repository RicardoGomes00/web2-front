import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina_inicial.component.html',
  styleUrl: './pagina_inicial.component.css'
})
export class PaginaInicialComponent {
  constructor(private router: Router) {}

  onSignUpClick() {
    const url = '/login';
    this.router.navigateByUrl(url);
  }

  onRegisterClick() {
    const url = '/autocadastro';
    this.router.navigateByUrl(url);
  }

  onOrderOnlineClick(){
    const url = '/order-online';
    this.router.navigateByUrl(url);
  }



}

