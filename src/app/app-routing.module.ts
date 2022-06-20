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
    path: 'negocio', component: NegocioInternacionalComponent, pathMatch:'full'

  },
  {
    path: 'asesor', component: AsesorcomexComponent , pathMatch:'full'

  },
  {
    path: 'cartera', component: CarteraComponent, pathMatch:'full'

  },
  {
    path: 'contraloria', component: ContraloriaComponent, pathMatch:'full'

  },
  {
    path: 'especialista', component: EspecialistacomexComponent, pathMatch:'full'

  },
  {
    path: 'fondos', component: FondosdefomentoComponent, pathMatch:'full'

  },
  {
    path: 'operaciones', component: OperacionesInternacionalesComponent, pathMatch:'full'

  },
  {
    path: '**', component: LoginComponent, pathMatch:'full'

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
