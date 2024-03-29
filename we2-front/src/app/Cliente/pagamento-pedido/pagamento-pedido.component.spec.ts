import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoPedidoComponent } from './pagamento-pedido.component';

describe('PagamentoPedidoComponent', () => {
  let component: PagamentoPedidoComponent;
  let fixture: ComponentFixture<PagamentoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentoPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagamentoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
