import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pagina-inicial-funcionario',
  templateUrl: './pagina-inicial-funcionario.component.html',
  styleUrls: ['./pagina-inicial-funcionario.component.css'],
  providers: [DatePipe]
})
export class PaginaInicialFuncionarioComponent implements OnInit {
  pedidosEmAberto: any[] = [];

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
   
    this.pedidosEmAberto = [
    ];
  }

  registrarRecolhimento(pedido: any): void {
    
  }

  formatarData(data: Date): string {
    return this.datePipe.transform(data, 'dd/MM/yyyy HH:mm')!;
  }
}
