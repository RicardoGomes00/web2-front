import { Component } from '@angular/core';
import { MarcarComoLavadoService } from '../../services/pedidos/MarcarComoLavadoService';

@Component({
  selector: 'app-visualizacao-de-pedidos',
  templateUrl: './visualizacao-de-pedidos.component.html',
  styleUrl: './visualizacao-de-pedidos.component.css',
})
export class VisualizacaoDePedidosComponent {
  constructor
  (
    private marcarComoLavadoService: MarcarComoLavadoService
  ) {}

  public marcarComoLavado(id: string): void {
    var response = this.marcarComoLavadoService.chamarApiExterna(id);
      if (response)
      {
        console.log("deu certo");
      }
      else
      {
        console.log("deu errado");
      }
  }
}
