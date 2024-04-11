import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Cliente/login/login.component';
import { AutocadastroComponent } from './Cliente/autocadastro/autocadastro.component';
import { OrderOnlineComponent } from './Cliente/order-online/order-online.component';
import { PaginaInicialComponent } from './Geral/pagina_inicial/pagina_inicial.component';
import { ListagemPedidosComponent } from './Cliente/listagem-pedidos/listagem-pedidos.component';
import { AprovacaoOrcamentoComponent } from './Cliente/aprovacao-orcamento/aprovacao-orcamento.component';
import { PaginaInicialFuncionarioComponent } from './Funcionario/pagina-inicial-funcionario/pagina-inicial-funcionario.component';
import { PagamentoPedidoComponent } from './Cliente/pagamento-pedido/pagamento-pedido.component';
import { ManutencaoFuncionarioComponent } from './Funcionario/manutencao-funcionario/manutencao-funcionario.component';
import { RelatorioReceitasComponent } from './Funcionario/relatorio-receitas/relatorio-receitas.component';
import { RelatorioClientesComponent } from './Funcionario/relatorio-clientes/relatorio-clientes.component';
import { ListarRoupasComponent } from './Funcionario/CrudRoupas/listar-roupas/listar-roupas.component';
import { EditarRoupaComponent } from './Funcionario/CrudRoupas/editar-roupa/editar-roupa.component';
import { InserirRoupaComponent } from './Funcionario/CrudRoupas/inserir-roupa/inserir-roupa.component';

export const routes: Routes = [
  {path: 'login', component:LoginComponent, pathMatch: 'full' },
  {path: 'autocadastro', component:AutocadastroComponent, pathMatch: 'full' },
  {path: 'order-online', component: OrderOnlineComponent, pathMatch: 'full' },
  {path: 'pagina_inicial', component: PaginaInicialComponent, pathMatch: 'full' },
  {path: 'listagem-pedidos', component: ListagemPedidosComponent, pathMatch: 'full' },
  {path: 'aprovacao-orcamento', component: AprovacaoOrcamentoComponent, pathMatch: 'full' },
  {path: 'pagina-inicial-funcionario', component: PaginaInicialFuncionarioComponent, pathMatch: 'full'},
  {path: 'pagamento', component: PagamentoPedidoComponent, pathMatch: 'full'},
  {path: 'roupas', component: ListarRoupasComponent, pathMatch: 'full'},
  {path: 'roupas/novo', component: InserirRoupaComponent, pathMatch: 'full'},
  {path: 'roupas/editar/:id', component: EditarRoupaComponent, pathMatch: 'full'},
  {path: 'manutencao-funcionario', component: ManutencaoFuncionarioComponent, pathMatch: 'full'},
  {path: 'relatorio-receitas', component: RelatorioReceitasComponent, pathMatch: 'full'},
  {path: 'relatorio-clientes', component: RelatorioClientesComponent, pathMatch: 'full'},
  {path:'**', redirectTo:'', pathMatch: 'full' }
];

