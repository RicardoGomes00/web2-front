import { Component } from '@angular/core';
import { RelatorioService } from '../relatorio.service';

@Component({
  selector: 'app-relatorios-fieis',
  templateUrl: './relatorio-clientes-fieis.component.html'
})
export class RelatorioClientesFieisComponent {
  clientesFieis = [
    {
      posicao: '1º',
      nome: 'Nicolas Portela',
      email: 'nicolas@ufpr.br',
      cpf: '12345678901',
      telefone: '41984043005',
      quantidadePedidos: 27,
      receitaGerada: 'R$ 423,50'
    },
    {
      posicao: '2º',
      nome: 'Ricardo Gomes',
      email: 'ricardo@ufpr.br',
      cpf: '01987654321',
      telefone: '41937426528',
      quantidadePedidos: 23,
      receitaGerada: 'R$ 391,00'
    },
    {
      posicao: '3º',
      nome: 'Lucas Silva',
      email: 'lucas@ufpr.br',
      cpf: '36487249843',
      telefone: '41998743127',
      quantidadePedidos: 17,
      receitaGerada: 'R$ 316,20'
    }
  ];

  constructor(private readonly relatorioService: RelatorioService) {}

  gerarRelatorioClientesFieis() {
    const headers = ['Posição', 'Nome', 'Email', 'CPF', 'Telefone', 'Quantidade de Pedidos', 'Receita Gerada'];
    const data = this.clientesFieis.map(cliente => [
      cliente.posicao,
      cliente.nome,
      cliente.email,
      cliente.cpf,
      cliente.telefone,
      cliente.quantidadePedidos.toString(),
      cliente.receitaGerada
    ]);
    this.relatorioService.gerarPDF(headers, data);
  }
}
