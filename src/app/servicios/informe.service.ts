import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  constructor() { }

  generarInformeBasico(){
    console.log('Creando un informe básico ...');
  }
}
