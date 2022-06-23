import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistacomexComponent } from './pages/especialistacomex/especialistacomex.component';
import { FormComponent } from './components/form/form.component';
import { NavComponent } from './components/nav/nav.component';
import { AsesorComexModule } from '../AsesorComex/asesor-comex.module';
import { TableComponent } from './components/table/table.component';
import { DataTablesModule } from 'angular-datatables';




@NgModule({
  declarations: [
    EspecialistacomexComponent,
    FormComponent,
    NavComponent,
    TableComponent,


  ],
  imports: [
    CommonModule,
    AsesorComexModule,
    DataTablesModule
  ],
  exports:[
    EspecialistacomexComponent
  ]
})
export class EspecialistacomexModule { }
