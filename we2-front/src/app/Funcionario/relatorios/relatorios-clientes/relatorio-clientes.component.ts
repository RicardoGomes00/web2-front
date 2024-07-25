import { Component } from '@angular/core';
import { RelatorioService } from '../relatorio.service';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorio-clientes.component.html'
})
export class RelatorioClientesComponent {
  clientes = [
    {
      nome: 'Nicolas Portela',
      email: 'nicolas@ufpr.br',
      cpf: '12345678901',
      telefone: '41984043005',
      cep: '828400020',
      rua: 'Av Canada',
      numero: '450',
      estado: 'Paraná',
      cidade: 'Curitiba',
      bairro: 'Centro'
    },
    {
      nome: 'Ricardo Gomes',
      email: 'ricardo@ufpr.br',
      cpf: '01987654321',
      telefone: '41937426528',
      cep: '34872462',
      rua: 'João Gualberto',
      numero: '12',
      estado: 'Paraná',
      cidade: 'Curitiba',
      bairro: 'Centro'
    },
    // Adicione outros clientes conforme necessário
  ];

  constructor(private readonly relatorioService: RelatorioService) {}

  gerarRelatorioClientes(){
    const headers = ['nome', 'email', 'cpf', 'telefone', 'cep', 'rua', 'numero', 'estado', 'bairro', 'cidade'];
    const data = this.clientes.map(cliente => Object.values(cliente));
    this.relatorioService.gerarPDF(headers, data);
  }
}
