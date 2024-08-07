import { Roupas } from "./roupas.model";

export enum PedidoStatus {
  EM_ABERTO = 'em aberto',
  REJEITADO = 'rejeitado',
  CANCELADO = 'cancelado',
  RECOLHIDO = 'recolhido',
  AGUARDANDO_PAGAMENTO = 'aguardando pagamento',
  PAGO = 'pago',
  FINALIZADO = 'finalizado'
}

type RoupaQuantidade = Pick<Roupas, 'nome'> & {quantidade: number};

export class Pedido {
  constructor(
    public id: string,
    public prazo?: Date,
    public precoTotal?: number,
    public roupas?: RoupaQuantidade[],
    public status?: PedidoStatus,
    public dataPedido?: Date,
  ) {}
}