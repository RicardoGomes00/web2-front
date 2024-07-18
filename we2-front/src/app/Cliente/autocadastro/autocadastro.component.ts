import { Component } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-autocadastro',
  standalone: true,
  templateUrl: './autocadastro.component.html',
  styleUrl: './autocadastro.component.css',
  imports: [
    NgxMaskDirective,
  ],
})
export class AutocadastroComponent {

  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      cpf: ['', [Validators.required]],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', [Validators.required]],
      telefone: ['', [Validators.required, Validators.pattern(/\(\d{2}\) \d{4,5}-\d{4}/)]]
    });
  }

  get nome() {
    return this.cadastroForm.get('nome');
  }

  get email() {
    return this.cadastroForm.get('email');
  }

  get telefone() {
    return this.cadastroForm.get('telefone');
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
    }
  }
}
