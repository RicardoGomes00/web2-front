import {v4 as uuidv4} from 'uuid';

import { StatusPedido } from '../enums/StatusPedido';

export default class Pedido
{
    private id: string;
    private status: StatusPedido;
    private valor: number;
    private prazo: Date;
    private dataRecolhimento: Date|null;
    // Faltou cliente

    constructor
    (
        valor: number,
        prazo: Date,
    ) {
        this.id = uuidv4();
        this.status = StatusPedido.aberto;
        this.valor = valor;
        this.prazo = prazo;
        this.dataRecolhimento = null;
    }

    getStatus() : StatusPedido
    {
        return this.status;
    }

    atualizarStatus(status: StatusPedido)
    {
        this.status = status

        // enviar dados para api atualizar banco

        return true;
    }

    static getPedidos(): Array<Pedido>
    {
        let pedidos: Array<Pedido> = [];

        return pedidos;
    }
}