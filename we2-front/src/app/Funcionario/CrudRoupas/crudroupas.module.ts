import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RoupasService } from '../services/roupas.service';
import { ListarRoupasComponent } from './listar-roupas/listar-roupas.component';
import { InserirRoupaComponent } from './inserir-roupa/inserir-roupa.component';
import { EditarRoupaComponent } from './editar-roupa/editar-roupa.component';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    ListarRoupasComponent,
    InserirRoupaComponent,
    EditarRoupaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    RoupasService,
    provideNgxMask(),
  ]
})
export class CrudroupasModule { }
