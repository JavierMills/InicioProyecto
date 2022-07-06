import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { HoteleroComponent } from './pages/hotelero/hotelero.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FormComponent,
    TableComponent,
    HoteleroComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HoteleroModule { }
