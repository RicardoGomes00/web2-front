import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AutocadastroComponent} from '../autocadastro/autocadastro.component'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    AutocadastroComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public showAutocadastro: boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.formLogin = this.createFormLogin();
  }

  ngOnInit(): void {}

  public createFormLogin(): FormGroup {
    return this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

public isFormControlInvalid(controlName: string): boolean {
const control = this.formLogin.get(controlName);
return !!(control && control.invalid && (control.dirty || control.touched));
}
  //Lógica de acesso sem BD

public login(): void {
  const { email, password } = this.formLogin.value;
  if (email === 'admin@example.com' && password === 'admin') {
    this.router.navigate(['/dashboard-funcionario']);//flutua para a página inicial do funcionário
  } else if (email === 'joao@example.com' && password === '12345678') {
    this.router.navigate(['/dashboard-cliente']); //flutua para a página inicial do cliente
  } else {
    alert('Credenciais Inválidas!');
  }
}
  public onSignUpClick() {
    const url = '/autocadastro';
    this.showAutocadastro = true;
  }

  public closeAutocadastro(){
    this.showAutocadastro = false;
  }
}
