import { Component, OnInit } from '@angular/core';

import { RoupasService } from '../../services/roupas.service';
import { Roupas } from '../../../shared/model/roupas.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-roupas',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './listar-roupas.component.html',
  styleUrls: ['./listar-roupas.component.css']
})
export class ListarRoupasComponent implements OnInit {
  roupas: Roupas[] = [];
  constructor(private roupasService: RoupasService){}

  ngOnInit(): void{
    this.roupas = this.listarRoupas();
  }

  listarRoupas(): Roupas[]{
    return this.roupasService.listarRoupas();
  }

  remover($event: any, roupa: Roupas): void{
    $event.preventDefault();
    if(confirm(`Deseja excluir a peça de roupa ${roupa.tipo}?`)){
      this.roupasService.removerRoupa(roupa.id!);
      this.roupas = this.listarRoupas();
    }
  }

}
