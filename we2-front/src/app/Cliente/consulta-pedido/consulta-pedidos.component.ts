import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-pedidos',
  templateUrl: './consulta-pedidos.component.html',
  styleUrls: ['./consulta-pedidos.component.css'],
})
export class ConsultaPedidosComponent implements OnInit {
  ListaPedidos: any[] = [
    { 
      "Nº do Pedido": 1, 
      "Peça": "Roupa",  
      "Descrição": "Camisa",
      "Data de Retirada": "2021-05-01",
      "Data de Entrega": "2021-04-01",
      "Status": "Em produção",
      "Preço": 100.00,
    },
    { 
      "Nº do Pedido": 1, 
      "Peça": "Roupa",  
      "Descrição": "Camisa",
      "Data de Retirada": "2021-05-01",
      "Data de Entrega": "2021-04-01",
      "Status": "Em produção",
      "Preço": 100.00,
    },
    { 
      "Nº do Pedido": 1, 
      "Peça": "Roupa", 
      "Descrição": "Camisa",
      "Data de Retirada": "2021-05-01",
      "Data de Entrega": "2021-04-01",
      "Status": "Em produção",
      "Preço": 100.00,
    },
    { 
      "Nº do Pedido": 1, 
      "Peça": "Roupa",  
      "Descrição": "Camisa",
      "Data de Retirada": "2021-05-01",
      "Data de Entrega": "2021-04-01",
      "Status": "Em produção",
      "Preço": 100.00,
    },
    { 
      "Nº do Pedido": 1, 
      "Peça": "Roupa",  
      "Descrição": "Camisa",
      "Data de Retirada": "2021-05-01",
      "Data de Entrega": "2021-04-01",
      "Status": "Em produção",
      "Preço": 100.00,
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}