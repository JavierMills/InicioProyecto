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
  // {
  //   path: 'hotelero', component: HoteleroC

  // },
  {
    path: '**', component: LoginComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
