import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoDePedidosComponent } from './visualizacao-de-pedidos.component';

describe('VisualizacaoDePedidosComponent', () => {
  let component: VisualizacaoDePedidosComponent;
  let fixture: ComponentFixture<VisualizacaoDePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizacaoDePedidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizacaoDePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
