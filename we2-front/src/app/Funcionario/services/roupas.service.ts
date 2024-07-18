import { Injectable } from '@angular/core';
import { Roupas } from '../../shared/models/roupas.model';

const RP_CHAVE: string = "roupas";

@Injectable({
  providedIn: 'root'
})
export class RoupasService {

  constructor() { }

  listarRoupas(): Roupas[]{
    const roupas = localStorage[RP_CHAVE];
    return roupas ? JSON.parse(roupas): [];
  }

  inserirRoupa(roupa : Roupas): void{
    const roupas = this.listarRoupas();
    roupa.id = new Date().getTime();
    roupas.push(roupa);
    localStorage[RP_CHAVE] = JSON.stringify(roupas);
  }

  atualizarRoupa(roupa: Roupas): void{
    const roupas = this.listarRoupas();
    roupas.forEach((obj, index, objs) => {
      if(roupa.id === obj.id){
        objs[index] = roupa;
      }
    });
    localStorage[RP_CHAVE] = JSON.stringify(roupas);
  }

  removerRoupa(id: number): void {
    let roupas: Roupas[] = this.listarRoupas();
    roupas = roupas.filter(roupas => roupas.id !== id);
    localStorage[RP_CHAVE] = JSON.stringify(roupas);
  }

  buscarPorId(id: number): Roupas | undefined{
    const roupas: Roupas[] = this.listarRoupas();
    return roupas.find(roupa => roupa.id === id);
  }
}
