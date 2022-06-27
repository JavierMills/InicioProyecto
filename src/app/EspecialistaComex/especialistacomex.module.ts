import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistacomexComponent } from './pages/especialistacomex/especialistacomex.component';
import { NavComponent } from './components/nav/nav.component';
import { AsesorComexModule } from '../AsesorComex/asesor-comex.module';
import { TableComponent } from './components/table/table.component';
import { DataTablesModule } from 'angular-datatables';
import { FormComponent } from './components/form/form.component';
import { ConsultagarantiaComponent } from './components/consultagarantia/consultagarantia.component';




@NgModule({
  declarations: [
    EspecialistacomexComponent,
    NavComponent,
    TableComponent,
    FormComponent,
    ConsultagarantiaComponent,


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
