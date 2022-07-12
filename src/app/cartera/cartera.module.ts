import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteraComponent } from './pages/cartera/cartera.component';
import { NavComponent } from './components/nav/nav.component';
import { SharedModule } from '../shared/shared.module';
import { AsesorComexModule } from '../AsesorComex/asesor-comex.module';



@NgModule({
  declarations: [
    CarteraComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AsesorComexModule
  ],
  exports:[
    CarteraComponent
  ]
})
export class CarteraModule { }
