import { Injectable } from '@angular/core';
import { InformeService } from './informe.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private informeService: InformeService) { }

  crearCliente(): void {
    console.log('Ejecutando operación ... ');
    this.informeService.generarInformeBasico();
  }
}
