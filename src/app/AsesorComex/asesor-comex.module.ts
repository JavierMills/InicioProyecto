import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AsesorcomexComponent } from './pages/asesorcomex/asesorcomex.component';
import { DataTablesModule } from "angular-datatables";
import  { HttpClientModule } from "@angular/common/http";
import { TableComponent } from './components/table/table.component';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es'

registerLocaleData(localEs);

@NgModule({
  declarations: [
    ComponentsComponent,
    AsesorcomexComponent,
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
  ],
  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ]
})
export class AsesorComexModule { }
