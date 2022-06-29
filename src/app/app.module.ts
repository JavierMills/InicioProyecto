import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';


import { AsesorComexModule } from './AsesorComex/asesor-comex.module';
import { CarteraModule } from './cartera/cartera.module';
import { ContraloriaModule } from './Contraloria/contraloria.module';
import { EspecialistacomexModule } from './EspecialistaComex/especialistacomex.module';
import { NegocioInternacionalModule } from './Negocio_Internacional/negocio-internacional.module';
import { OperacionInternacionalModule } from './Operacion_Internacional/operacion-internacional.module';
import { FondosdefomentoModule } from './FondosDeFomento/fondosdefomento.module';
import { DataTablesModule } from "angular-datatables";
import { FormsModule } from '@angular/forms';
import { HoteleroModule } from './Hotelero/hotelero.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    AsesorComexModule,
    CarteraModule,
    ContraloriaModule,
    EspecialistacomexModule,
    NegocioInternacionalModule,
    OperacionInternacionalModule,
    FondosdefomentoModule,
    DataTablesModule,
    FormsModule,
    HoteleroModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
