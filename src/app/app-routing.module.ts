import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AsesorcomexComponent } from './AsesorComex/pages/asesorcomex/asesorcomex.component';
import { CarteraComponent } from './cartera/pages/cartera/cartera.component';
import { NegocioInternacionalComponent } from './Negocio_Internacional/pages/negocio-internacional/negocio-internacional.component';
import { LoginComponent } from './shared/start/login.component';
import { ContraloriaComponent } from './Contraloria/pages/contraloria/contraloria.component';
import { EspecialistacomexComponent } from './EspecialistaComex/pages/especialistacomex/especialistacomex.component';
import { FondosdefomentoComponent } from './FondosDeFomento/pages/fondosdefomento/fondosdefomento.component';
import { OperacionesInternacionalesComponent } from './Operacion_Internacional/pages/operaciones-internacionales/operaciones-internacionales.component';
import { HoteleroComponent } from './Hotelero/pages/hotelero/hotelero.component';
import { ValidadorComponent } from './Validador/pages/validador/validador.component';
import { OperacionInternacionalModule } from './Operacion_Internacional/operacion-internacional.module';
import { RiesgosComponent } from './Riesgos/pages/riesgos/riesgos.component';
import { AuditoriaComponent } from './Auditoria/pages/auditoria/auditoria.component';
import { GarantiasComponent } from './Garantias/pages/garantias/garantias.component';
import { ConsultaComponent } from './Consulta/pages/consulta/consulta.component';





const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch:'full'

  },
  {
    path: 'negocio', component: NegocioInternacionalComponent

  },
  {
    path: 'asesor', component: AsesorcomexComponent

  },
  {
    path: 'cartera', component: CarteraComponent

  },
  {
    path: 'contraloria', component: ContraloriaComponent

  },
  {
    path: 'especialista', component: EspecialistacomexComponent

  },
  {
    path: 'fondos', component: FondosdefomentoComponent

  },
  {
    path: 'operaciones', component: OperacionesInternacionalesComponent

  },
  {
    path: 'hotelero', component: HoteleroComponent

  },
  {
    path: 'validador', component: ValidadorComponent

  },
  {
    path: 'operaciones', component: OperacionesInternacionalesComponent

  },

  {
    path: 'riesgos', component: RiesgosComponent

  },
  {
    path: 'auditoria', component: AuditoriaComponent

  },
  {
    path: 'garantias', component: GarantiasComponent

  },

  {
    path: 'consulta', component: ConsultaComponent

  },


  {
    path: '**', component: LoginComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
