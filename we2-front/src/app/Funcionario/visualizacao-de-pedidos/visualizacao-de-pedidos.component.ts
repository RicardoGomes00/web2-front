import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatusPedido } from '../../enums/StatusPedido';
import Pedido from '../../entities/Pedido';

@Component({
  selector: 'app-visualizacao-de-pedidos',
  templateUrl: './visualizacao-de-pedidos.component.html',
  styleUrls: ['./visualizacao-de-pedidos.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class VisualizacaoDePedidosComponent {
  pedidos: Pedido[] = Pedido.getPedidos();
  statusPedido = StatusPedido;
  filtro: string = 'todos';
  dataInicio: string = '';
  dataFim: string = '';

  statusColors = [
    { status: StatusPedido.aberto, color: 'warning' },
    { status: StatusPedido.rejeitado, color: 'danger' },
    { status: StatusPedido.cancelado, color: 'danger' },
    { status: StatusPedido.recolhido, color: 'secondary' },
    { status: StatusPedido.aguardandoPagamento, color: 'primary' },
    { status: StatusPedido.pago, color: 'info' },
    { status: StatusPedido.finalizado, color: 'success' },
  ];

  getStatusClass(status: StatusPedido): string {
    switch (status) {
      case StatusPedido.aberto:
        return 'table-warning';
      case StatusPedido.rejeitado:
      case StatusPedido.cancelado:
        return 'table-danger';
      case StatusPedido.recolhido:
        return 'table-secondary';
      case StatusPedido.aguardandoPagamento:
        return 'table-primary';
      case StatusPedido.pago:
        return 'table-info';
      case StatusPedido.finalizado:
        return 'table-success';
      default:
        return '';
    }
  }

  aplicarFiltro(): void {
    if (this.filtro === 'hoje') {
      const hoje = new Date().toISOString().split('T')[0];
      this.pedidos = Pedido.getPedidos().filter(pedido => {
        const dataRecolhimento = pedido.getDataRecolhimento();
        if (dataRecolhimento) {
          const dataRecolhimentoIso = new Date(dataRecolhimento).toISOString().split('T')[0];
          return dataRecolhimentoIso === hoje;
        }
        return false;
      });
    } else if (this.filtro === 'periodo' && this.dataInicio && this.dataFim) {
      const inicio = new Date(this.dataInicio);
      const fim = new Date(this.dataFim);
      this.pedidos = Pedido.getPedidos().filter(pedido => {
        const dataRecolhimento = pedido.getDataRecolhimento();
        if (dataRecolhimento) {
          const dataRecolhimentoDate = new Date(dataRecolhimento);
          return dataRecolhimentoDate >= inicio && dataRecolhimentoDate <= fim;
        }
        return false;
      });
    } else {
      this.pedidos = Pedido.getPedidos();
    }
  }

  public confirmarRecolhimento(pedido: Pedido): void {
    pedido.atualizarStatus(StatusPedido.recolhido);
    this.atualizarPedidos();
  }

  public confirmarLavagem(pedido: Pedido): void {
    pedido.atualizarStatus(StatusPedido.aguardandoPagamento);
    this.atualizarPedidos();
  }

  public finalizarPedido(pedido: Pedido): void {
    pedido.atualizarStatus(StatusPedido.finalizado);
    this.atualizarPedidos();
  }

  private atualizarPedidos(): void {
    this.pedidos = Pedido.getPedidos();
  }
}
