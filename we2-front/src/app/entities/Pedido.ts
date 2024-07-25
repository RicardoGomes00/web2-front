import {v4 as uuidv4} from 'uuid';
import { StatusPedido } from '../enums/StatusPedido';

export default class Pedido {
  private id: string;
  private status: StatusPedido;
  private valor: number;
  private prazo: Date;
  private dataRecolhimento: Date|null;

  constructor(valor: number, prazo: Date) {
    this.id = uuidv4();
    this.status = StatusPedido.aberto;
    this.valor = valor;
    this.prazo = prazo;
    this.dataRecolhimento = null;
  }

  getId(): string {
    return this.id;
  }

  getStatus(): StatusPedido {
    return this.status;
  }

  getValor(): number {
    return this.valor;
  }

  getPrazo(): Date {
    return this.prazo;
  }

  getDataRecolhimento(): Date | null {
    return this.dataRecolhimento;
  }

  atualizarStatus(status: StatusPedido): void {
    this.status = status;
    // Simula a atualização do status no banco de dados
    console.log(`Pedido ${this.id} atualizado para o status ${status}`);
  }

  static pedidos: Pedido[] = [
    new Pedido(15, new Date()),
    new Pedido(20, new Date()),
    new Pedido(21, new Date()),
    new Pedido(30, new Date())
  ];

  static getPedidos(): Array<Pedido> {
    return Pedido.pedidos;
  }

  static atualizarPedido(pedidoAtualizado: Pedido): void {
    const index = Pedido.pedidos.findIndex(pedido => pedido.getId() === pedidoAtualizado.getId());
    if (index !== -1) {
      Pedido.pedidos[index] = pedidoAtualizado;
    }
  }
}
