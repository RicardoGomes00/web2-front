import { Injectable } from '@angular/core';
import { Login, Usuario } from '../../../shared/model'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const LS_CHAVE: string = "usuarioLogado"; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = "http://localhost:8080/login";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public get usuarioLogado(): Usuario { 
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }
    
  public set usuarioLogado(usuario: Usuario) { 
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<Usuario | null> {
    return this.httpClient.post<Usuario>(this.BASE_URL, login, this.httpOptions);
  }
}