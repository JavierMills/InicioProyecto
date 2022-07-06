import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteraComponent } from './pages/cartera/cartera.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CarteraComponent,
    NavComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CarteraComponent
  ]
})
export class CarteraModule { }
