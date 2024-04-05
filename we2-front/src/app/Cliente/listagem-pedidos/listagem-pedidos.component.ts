import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listagem-pedidos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './listagem-pedidos.component.html',
  styleUrl: './listagem-pedidos.component.css'
})
export class ListagemPedidosComponent {
  pedidos = Pedidos;

  constructor(
    private router: Router
  ){}

  confirmarPagamento(pedido: any) {
    const index = this.pedidos.findIndex(p => p.numeroPedido === pedido.numeroPedido);

    if (index !== -1) {
      this.pedidos[index].status = 'Pago';
    }
  }

  remover($event: any,pedido: any): void{
    const index = this.pedidos.findIndex(p => p.numeroPedido === pedido.numeroPedido);

    $event.preventDefault();
    if(confirm(`Deseja excluir a peça de roupa ?`)){

      if (index !== -1) {
        this.pedidos[index].status = 'Cancelado';
      }
    }
  }


}

const Pedidos = [
  {numeroPedido: '020', pecas:'1 Casaco, 2 calças', dataRetirada:'02/09/2023 16:07:34', dataEntrega:'', status:'Aberto'},
  {numeroPedido: '016', pecas:'4 Cuecas, 2 calças', dataRetirada:'29/08/2023 14:02:51', dataEntrega:'', status:'Aberto'},
  {numeroPedido: '015', pecas:'2 Casacos', dataRetirada:'29/08/2023 11:44:38', dataEntrega:'', status:'Cancelado'},
  {numeroPedido: '014', pecas:'3 Camisetas, 2 calças', dataRetirada:'28/08/2023 14:16:08', dataEntrega:'', status:'Aberto'},
  {numeroPedido: '011', pecas:'4 Calças, 3 meias, 1 casaco', dataRetirada:'25/08/2023 11:35:20', dataEntrega:'', status:'Rejeitado'},
  {numeroPedido: '010', pecas:'1 Camiseta, 3 meias', dataRetirada:'24/08/2023 10:02:58', dataEntrega:'28/08/2023 16:07:34', status:'Finalizado'},
  {numeroPedido: '009', pecas:'4 Cuecas, 2 calças', dataRetirada:'23/08/2023 15:13:07', dataEntrega:'27/08/2023 16:07:34', status:'Finalizado'},
  {numeroPedido: '003', pecas:'4 Camisetas', dataRetirada:'21/08/2023 11:34:26', dataEntrega:'21/08/2023 16:07:34', status:'Finalizado'},
  {numeroPedido: '002', pecas:'4 Camisetas', dataRetirada:'16/08/2023 08:21:18', dataEntrega:'', status:'Cancelado'}
]

