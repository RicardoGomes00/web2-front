import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RelatorioService } from '../relatorio.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface IReceita {
  data: string;
  pedido: string;
  valorRecebido: string;
}

@Component({
  selector: 'app-relatorio-receitas',
  templateUrl: './relatorio-receitas.component.html'
})
export class RelatorioReceitasComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;
  receitas: IReceita[] = [];

  constructor(private readonly relatorioService: RelatorioService) {}

  ngOnInit(): void {
    this.receitas = [
      {
        data: '30/04/2023',
        pedido: '020',
        valorRecebido: 'R$ 30,00',
      },
      {
        data: '28/04/2023',
        pedido: '017',
        valorRecebido: 'R$ 20,00',
      },
      {
        data: '27/04/2023',
        pedido: '015',
        valorRecebido: 'R$ 18,50',
      },
      {
        data: '26/04/2023',
        pedido: '013',
        valorRecebido: 'R$ 42,00',
      },
      {
        data: '25/04/2023',
        pedido: '012',
        valorRecebido: 'R$ 27,00',
      },
      {
        data: '24/04/2023',
        pedido: '013',
        valorRecebido: 'R$ 42,00',
      },
    ];
  }

  gerarRelatorioReceitas() {
    const headers = ['Data', 'Pedido', 'Cliente', 'Valor Recebido'];
    const data: string[][] = this.receitas.map(receita => [
      receita.data, receita.pedido, receita.valorRecebido
    ]);
    this.relatorioService.gerarPDF(headers, data);
  }
}