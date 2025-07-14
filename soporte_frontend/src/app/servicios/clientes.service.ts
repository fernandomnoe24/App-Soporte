import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientesService {
  private API = 'http://localhost:3000/api/clientes';

  constructor(private http: HttpClient) {}

  obtenerClientes(): Observable<any> {
    return this.http.get(this.API);
  }
}
