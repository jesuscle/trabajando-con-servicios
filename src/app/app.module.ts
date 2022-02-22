import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClienteService } from './servicios/cliente.service';
import { MiPanelComponent } from './mi-panel/mi-panel.component';
import { InformeService } from './servicios/informe.service';
import { MiTextoComponent } from './mi-texto/mi-texto.component';
import { MostrarInfoComponent } from './mostrar-info/mostrar-info.component';
import { DatosService } from './servicios/datos.service';
import { GestorAlbaranComponent } from './gestor-albaran/gestor-albaran.component';
import { AlbaranService } from './servicios/albaran.service';
import { AlbaranAvdService } from './servicios/albaran-avd.service';
import { ProductoComponent } from './demo/producto/producto.component';
import { ProductoService } from './demo/producto.service';
import { CalculadorService } from './demo/calculador.service';

@NgModule({
  declarations: [
    AppComponent,
    MiPanelComponent,
    MiTextoComponent,
    MostrarInfoComponent,
    GestorAlbaranComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ClienteService, InformeService, DatosService,
    {provide: AlbaranService, useClass: AlbaranAvdService}, ProductoService, CalculadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
