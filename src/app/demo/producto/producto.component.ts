import { Component, OnInit } from '@angular/core';
import { ProductoMejorado } from '../producto-mejorado';
import { ProductoService } from '../producto.service';
import { ServicioCalculador } from '../servicio-calculador';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {

  private productoService: ProductoService;
  constructor(_productoService: ProductoService) {
    this.productoService = _productoService;
  }

  ngOnInit(): void {}

  onclick() {
    this.productoService.calcularCostes(10);
  }
}
