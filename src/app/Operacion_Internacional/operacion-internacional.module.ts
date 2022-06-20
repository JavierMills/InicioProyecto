import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesInternacionalesComponent } from './pages/operaciones-internacionales/operaciones-internacionales.component';
import { ComponentsComponent } from '../Operacion_Internacional/components/components.component';



@NgModule({
  declarations: [
    OperacionesInternacionalesComponent,
    ComponentsComponent
  
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OperacionesInternacionalesComponent,
    ComponentsComponent
  ]
})
export class OperacionInternacionalModule { }
