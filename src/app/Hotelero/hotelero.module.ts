import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { PagesComponent } from './pages/pages.component';
import { HoteleroComponent } from './pages/hotelero/hotelero.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FormComponent,
    TableComponent,
    PagesComponent,
    HoteleroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HoteleroModule { }
