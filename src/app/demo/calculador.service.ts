import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadorService {

  constructor() { }

  calcularCosteTotal(coeficienteCorrector: number, precioProducto: number): number{
    // Lo que sea, no me interesa
    return 0;
  }

}
