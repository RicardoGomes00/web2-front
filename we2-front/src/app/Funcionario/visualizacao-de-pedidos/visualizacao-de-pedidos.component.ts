import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPedido } from '../../enums/StatusPedido';
import Pedido from '../../entities/Pedido';

@Component({
  selector: 'app-visualizacao-de-pedidos',
  templateUrl: './visualizacao-de-pedidos.component.html',
  styleUrl: './visualizacao-de-pedidos.component.css',

  standalone: true,
  imports: [
    CommonModule
  ],
})
export class VisualizacaoDePedidosComponent {
  pedidos = Pedido.getPedidos();
  statusPedido = StatusPedido;

  public confirmarRecolhimento(pedido: Pedido): void {
    // var response = this.marcarComoLavadoService.chamarApiExterna(pedido.id);
    //   if (response)
    //   {
    //     console.log("deu certo");
    //   }
    //   else
    //   {
    //     console.log("deu errado");
    //   }
  }

  public confirmarLavagem(pedido: Pedido): void {
    // var response = this.marcarComoLavadoService.chamarApiExterna(pedido.id);
    //   if (response)
    //   {
    //     console.log("deu certo");
    //   }
    //   else
    //   {
    //     console.log("deu errado");
    //   }
  }

  public finalizarPedido(pedido: Pedido): void {
    // var response = this.marcarComoLavadoService.chamarApiExterna(pedido.id);
    //   if (response)
    //   {
    //     console.log("deu certo");
    //   }
    //   else
    //   {
    //     console.log("deu errado");
    //   }
  }
}

const Pedidos = [
  {numeroPedido: '020', pecas:'1 Casaco, 2 calças', dataRetirada:'02/09/2023 16:07:34', cliente:'Enzo Radel', status:'Aberto'},
  {numeroPedido: '016', pecas:'4 Cuecas, 2 calças', dataRetirada:'29/08/2023 14:02:51', cliente:'Enzo Radel', status:'Aberto'},
  {numeroPedido: '015', pecas:'2 Casacos', dataRetirada:'29/08/2023 11:44:38', cliente:'Enzo Radel', status:'Cancelado'},
  {numeroPedido: '014', pecas:'3 Camisetas, 2 calças', dataRetirada:'28/08/2023 14:16:08', cliente:'Enzo Radel', status:'Aberto'},
  {numeroPedido: '011', pecas:'4 Calças, 3 meias, 1 casaco', dataRetirada:'25/08/2023 11:35:20', cliente:'Enzo Radel', status:'Rejeitado'},
  {numeroPedido: '010', pecas:'1 Camiseta, 3 meias', dataRetirada:'24/08/2023 10:02:58', cliente:'Enzo Radel', status:'Finalizado'},
  {numeroPedido: '009', pecas:'4 Cuecas, 2 calças', dataRetirada:'23/08/2023 15:13:07', cliente:'Enzo Radel', status:'Finalizado'},
  {numeroPedido: '003', pecas:'4 Camisetas', dataRetirada:'21/08/2023 11:34:26', cliente:'Enzo Radel', status:'Finalizado'},
  {numeroPedido: '002', pecas:'4 Camisetas', dataRetirada:'16/08/2023 08:21:18', cliente:'Enzo Radel', status:'Cancelado'}
]