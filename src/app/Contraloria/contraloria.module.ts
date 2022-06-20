import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContraloriaComponent } from './pages/contraloria/contraloria.component';



@NgModule({
  declarations: [
    ContraloriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContraloriaComponent
  ]
})
export class ContraloriaModule { }
