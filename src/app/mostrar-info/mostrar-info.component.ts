import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-mostrar-info',
  templateUrl: './mostrar-info.component.html',
  styleUrls: ['./mostrar-info.component.css']
})
export class MostrarInfoComponent implements OnInit {

  informacionRecuperada: string = 'No hay datos ...';
  constructor(private datosService: DatosService) { }

  ngOnInit(): void {

    this.datosService.pushedData.subscribe(
      mensaje => this.informacionRecuperada = mensaje
    );

  }

}
