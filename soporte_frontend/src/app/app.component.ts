import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ClientesService } from './servicios/clientes.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], 
  template: `
    <h1>Listado de Clientes</h1>
    <ul>
      <li *ngFor="let cliente of clientes">
        id:
        {{ cliente.id_cliente }} | Nombre: {{ cliente.nombre }} | Apellido: {{ cliente.apellido }} | DNI: {{ cliente.dni }} | Dirección: {{ cliente.direccion }} | Email: {{ cliente.email }} | Cel: {{cliente.tel}}  
      </li>
    </ul>
  `
})
export class AppComponent {
  clientes: any[] = [];
  private clienteService = inject(ClientesService);

  constructor() {
    this.clienteService.obtenerClientes().subscribe((data) => {
      this.clientes = data;
    });
  }
}
