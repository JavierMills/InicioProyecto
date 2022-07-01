import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { ValidadorComponent } from './pages/validador/validador.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FormComponent,
    TableComponent,
    ValidadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ValidadorModule { }
