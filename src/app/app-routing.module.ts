import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialistacomexModule } from './EspecialistaComex/especialistacomex.module';
import { NegocioInternacionalComponent } from './Negocio_Internacional/pages/negocio-internacional/negocio-internacional.component';
import { LoginComponent } from './shared/start/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch:'full'

  },
  {
    path: 'negocio', component: NegocioInternacionalComponent, pathMatch:'full'

  },
  {
    path: '', component: EspecialistacomexModule, pathMatch:'full'

  },
  {
    path: '', component: LoginComponent, pathMatch:'full'

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
