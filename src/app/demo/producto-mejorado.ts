import { ServicioCalculador } from "./servicio-calculador";

export class ProductoMejorado {

  precioBase: number;
  calculador: ServicioCalculador;

  constructor(precioBase: number, calculador: ServicioCalculador){
    this.precioBase = precioBase;
    this.calculador = calculador;
  }

  calcularCostes(coeficienteCorrector: number): number{

    // Producto usa ServicioCalculador.calcularCosteTotal
    return this.calculador.calcularCosteTotal(coeficienteCorrector, this.precioBase);

  }

}
