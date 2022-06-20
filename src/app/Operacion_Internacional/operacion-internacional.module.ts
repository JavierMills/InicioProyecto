import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesInternacionalesComponent } from './pages/operaciones-internacionales/operaciones-internacionales.component';



@NgModule({
  declarations: [
    OperacionesInternacionalesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OperacionesInternacionalesComponent
  ]
})
export class OperacionInternacionalModule { }
