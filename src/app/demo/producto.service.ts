import { Injectable } from '@angular/core';
import { CalculadorService } from './calculador.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private calculador: CalculadorService){
  }

  calcularCostes(coeficienteCorrector: number): number{

    // Producto usa ServicioCalculador.calcularCosteTotal
    return this.calculador.calcularCosteTotal(coeficienteCorrector, 222);
  }

}
