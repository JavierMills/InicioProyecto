import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegocioInternacionalComponent } from './pages/negocio-internacional/negocio-internacional.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NegocioInternacionalComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
  SharedModule
  ],

})
export class NegocioInternacionalModule { }
