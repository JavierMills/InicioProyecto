import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AsesorcomexComponent } from './pages/asesorcomex/asesorcomex.component';
import { DataTablesModule } from "angular-datatables";
import  { HttpClientModule } from "@angular/common/http";



import { TableComponent } from './components/table/table.component';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import { FormComexTmecComponent } from './components/form-comex-tmec/form-comex-tmec.component'
import { FormComponent } from './components/form/form.component';
import { FormPymeComponent } from './components/form-pyme/form-pyme.component';
import { FormSelectivasComponent } from './components/form-selectivas/form-selectivas.component';
import { FormTmecComponent } from './components/form-tmec/form-tmec.component';
import { FormTurismoComponent } from './components/form-turismo/form-turismo.component';
import { FormsModule } from '@angular/forms';
import { TableComexTmecComponent } from './components/table-comex-tmec/table-comex-tmec.component';
import { TablePymeComponent } from './components/table-pyme/table-pyme.component';
import { TableSelectivasComponent } from './components/table-selectivas/table-selectivas.component';
import { TableTmecComponent } from './components/table-tmec/table-tmec.component';
import { TableTurismoComponent } from './components/table-turismo/table-turismo.component';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    ComponentsComponent,
    AsesorcomexComponent,
    FormComexTmecComponent,
    FormComponent,
    FormPymeComponent,
    FormSelectivasComponent,
    FormTmecComponent,
    FormTurismoComponent,
    TableComponent,
    TableComexTmecComponent,
    TablePymeComponent,
    TableSelectivasComponent,
    TableTmecComponent,
    TableTurismoComponent

  ],
  imports: [
    CommonModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule

  ],

  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ]
})
export class AsesorComexModule { }
