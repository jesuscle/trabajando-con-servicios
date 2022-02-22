import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service';
import { FacturaService } from '../servicios/factura-service';

@Component({
  selector: 'app-mi-panel',
  templateUrl: './mi-panel.component.html',
  styleUrls: ['./mi-panel.component.css'],
})
export class MiPanelComponent implements OnInit {

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {}

  ejecutar() {
    // Usar el servicio ClienteService
    this.clienteService.crearCliente();
  }









  // MAL, MAL, MUY MAL.
  onclick() {
    // No aplica inyección de dependencias
    let servicio = new FacturaService();
    servicio.crearFactura();
  }
}
