import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistacomexComponent } from './pages/especialistacomex/especialistacomex.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    EspecialistacomexComponent,
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
