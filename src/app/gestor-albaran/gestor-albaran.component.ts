import { Component, OnInit } from '@angular/core';
import { AlbaranService } from '../servicios/albaran.service';

@Component({
  selector: 'app-gestor-albaran',
  templateUrl: './gestor-albaran.component.html',
  styleUrls: ['./gestor-albaran.component.css']
})
export class GestorAlbaranComponent implements OnInit {

  constructor(private servicioAlbaran: AlbaranService) { }

  ngOnInit(): void {
  }

  buscar(patron: string): void{
    this.servicioAlbaran.buscarAlbaran();
  }

}
