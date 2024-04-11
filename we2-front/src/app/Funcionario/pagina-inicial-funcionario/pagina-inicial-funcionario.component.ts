import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-pagina-inicial-funcionario',
  templateUrl: './pagina-inicial-funcionario.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./pagina-inicial-funcionario.component.css'],
  providers: [DatePipe]
})
export class PaginaInicialFuncionarioComponent {


  constructor(private datePipe: DatePipe) { }

    pedidoEmAberto = [
      {
        numero: '001',
        dataHora: new Date(),
        cliente: 'Maria José'
      },
      {
        numero: '002',
        dataHora: new Date(),
        cliente: 'João'
      }
    ];
  

    registrarRecolhimento(pedido: any): void {
      //filtra o pedido
      this.pedidoEmAberto = this.pedidoEmAberto.filter(p => p !== pedido);
    }

  formatarData(data: Date): string {
    return this.datePipe.transform(data, 'dd/MM/yyyy HH:mm')!;
  }
}
