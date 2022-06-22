import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistacomexComponent } from './pages/especialistacomex/especialistacomex.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    EspecialistacomexComponent,
    FormularioComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EspecialistacomexComponent
  ]
})
export class EspecialistacomexModule { }
