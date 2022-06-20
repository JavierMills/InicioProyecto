import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegocioInternacionalComponent } from './pages/negocio-internacional/negocio-internacional.component';



@NgModule({
  declarations: [
    NegocioInternacionalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NegocioInternacionalComponent
  ]
})
export class NegocioInternacionalModule { }
