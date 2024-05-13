import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'http://localhost:3000/cliente'
  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: any){
    return this.http.post(this.baseUrl, cliente);
  }
  getCliente(): Observable<Cliente>{
    return this.http.get<Cliente>(this.baseUrl);
  }
}
