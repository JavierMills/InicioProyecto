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

registerLocaleData(localEs);

@NgModule({
  declarations: [
    ComponentsComponent,
    AsesorcomexComponent,
    TableComponent,
    FormComexTmecComponent,
    FormComponent,
    FormPymeComponent,
    FormSelectivasComponent,
    FormTmecComponent,
    FormTurismoComponent,


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
