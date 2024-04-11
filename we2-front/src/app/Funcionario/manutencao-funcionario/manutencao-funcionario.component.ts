
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { ManutencaoFuncionarioService } from './manutencao-funcionario.service'; aguardando o backend!


export interface Funcionario {
  id?: number;
  nome: string;
  email: string;
  dataNascimento: string;
  senha?: string;
}

@Component({
  selector: 'app-manutencao-funcionario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './manutencao-funcionario.component.html',
  styleUrls: ['./manutencao-funcionario.component.css']
})
export class ManutencaoFuncionarioComponent implements OnInit {
  funcionario: Funcionario = {
    nome: '',
    email: '',
    dataNascimento: '',
  };
  funcionarios: Funcionario[] = [];

  @ViewChild('funcionarioForm') funcionarioForm!: NgForm;

  ngOnInit() {
  }

  adicionarFuncionario() {

    if (this.funcionarioForm && this.funcionarioForm.valid) {
      console.log('Funcionário a ser adicionado:', this.funcionario);
      this.funcionarios.push({ ...this.funcionario, id: this.funcionarios.length + 1 });
      this.funcionario = { nome: '', email: '', dataNascimento: '' };
    }
  }

  editarFuncionario(funcionario: Funcionario) {//Falta incrementar estas funções EDITAR e REMOVER o funcionario, pode ser com um button para isto.
    console.log('Funcionário a ser editado:', funcionario);
  }

  removerFuncionario(id: number) {
    console.log('Funcionário a ser removido com id:', id);
    this.funcionarios = this.funcionarios.filter(f => f.id !== id);
  }
}
