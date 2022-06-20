import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AsesorcomexComponent } from './pages/asesorcomex/asesorcomex.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    AsesorcomexComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    ComponentsComponent,
    AsesorcomexComponent
  ]
})
export class AsesorComexModule { }
