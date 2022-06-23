import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AsesorcomexComponent } from './pages/asesorcomex/asesorcomex.component';
import { FormComponent } from './components/form/form.component';
import { FolioComponent } from './components/Folio/folio.component';
import { DataTablesModule } from "angular-datatables";
import  { HttpClientModule } from "@angular/common/http";
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    AsesorcomexComponent,
    FormComponent,
    FolioComponent,
    TableComponent,


  ],
  imports: [
    CommonModule,
    DataTablesModule,
    HttpClientModule,

  ],
  exports:[
    ComponentsComponent,
    AsesorcomexComponent,
    FormComponent,
    FolioComponent,


  ]
})
export class AsesorComexModule { }
