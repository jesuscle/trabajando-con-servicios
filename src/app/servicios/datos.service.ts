import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  pushedData = new EventEmitter<string>();
  constructor() { }

  pushData(dato: string){
    this.pushedData.emit(dato);
  }

}
