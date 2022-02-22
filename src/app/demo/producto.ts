import { ServicioCalculador } from "./servicio-calculador";

export class Producto {

  precioBase: number;

  constructor(precioBase: number){
    this.precioBase = precioBase;
  }

  calcularCostes(coeficienteCorrector: number): number{

    // Producto usa ServicioCalculador.calcularCosteTotal
    let calculador = new ServicioCalculador();
    return calculador.calcularCosteTotal(coeficienteCorrector, this.precioBase);

  }

}
