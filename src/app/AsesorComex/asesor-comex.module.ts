import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesorcomexComponent } from './pages/asesorcomex/asesorcomex.component';
import { ComponentsComponent } from './components/Navbar/components.component';



@NgModule({
  declarations: [
    AsesorcomexComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    AsesorcomexComponent,
    ComponentsComponent
  ]
})
export class AsesorComexModule { }
 