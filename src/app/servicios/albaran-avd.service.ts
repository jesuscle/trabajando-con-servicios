import { Injectable } from '@angular/core';
import { AlbaranService } from './albaran.service';

@Injectable({
  providedIn: 'root'
})
export class AlbaranAvdService extends AlbaranService{

  constructor() {
    super();
  }

  buscarAlbaran() {
    console.log('Ejecutando el servicio avanzado ...');
  }

}
