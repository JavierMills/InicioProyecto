import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteraComponent } from './pages/cartera/cartera.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    CarteraComponent,
    NavComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarteraComponent
  ]
})
export class CarteraModule { }
