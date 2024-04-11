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
  statusColors = [
    { status: StatusPedido.aberto, color: "warning" },
    { status: StatusPedido.rejeitado, color: "danger" },
    { status: StatusPedido.cancelado, color: "danger" },
    { status: StatusPedido.recolhido, color: "secondary" },
    { status: StatusPedido.aguardandoPagamento, color: "primary" },
    { status: StatusPedido.pago, color: "info" },
    { status: StatusPedido.finalizado, color: "success" },
  ]

  getStatusClass(status: StatusPedido): string {
    switch (status) {
      case StatusPedido.aberto:
        return 'warning';
      case StatusPedido.rejeitado:
        return 'danger';
      case StatusPedido.cancelado:
        return 'danger';
      case StatusPedido.recolhido:
        return 'secondary';
      case StatusPedido.aguardandoPagamento:
        return 'primary';
      case StatusPedido.pago:
        return 'info';
      case StatusPedido.finalizado:
        return 'success';
      default:
        return '';
    }
  }

  public confirmarRecolhimento(pedido: Pedido): void {
    pedido.atualizarStatus(StatusPedido.recolhido);
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
    pedido.atualizarStatus(StatusPedido.aguardandoPagamento);
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
    pedido.atualizarStatus(StatusPedido.finalizado);
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