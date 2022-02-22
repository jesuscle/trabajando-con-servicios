import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-mi-texto',
  templateUrl: './mi-texto.component.html',
  styleUrls: ['./mi-texto.component.css']
})
export class MiTextoComponent implements OnInit {

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
  }

  recuperarTexto(texto: string): void{
    this.datosService.pushData(texto);
  }

}
