import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class MarcarComoLavadoService {
  constructor(private http: HttpClient) {}

  public chamarApiExterna(id: string): boolean {
    return true;
  }
}
