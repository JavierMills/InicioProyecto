import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContraloriaComponent } from './pages/contraloria/contraloria.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { NavComponent } from './components/nav/nav.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContraloriaComponent,
    FormComponent,
    TableComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule

  ],
  exports:[
    ContraloriaComponent
  ]
})
export class ContraloriaModule { }
