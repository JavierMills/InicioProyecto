import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AsesorcomexComponent } from './pages/asesorcomex/asesorcomex.component';
import { DataTablesModule } from "angular-datatables";
import  { HttpClientModule } from "@angular/common/http";



import { TableComponent } from './components/table/table.component';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import { FormComponent } from './components/form/form.component';
import { FormComexTmecComponent } from './components/form-comex-tmec/form-comex-tmec.component'
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
import { FormReestructurasComponent } from './components/form-reestructuras/form-reestructuras.component';
import { TableReestructurasComponent } from './components/table-reestructuras/table-reestructuras.component';
import { SteperComponent } from './components/steper/steper.component';
import { SharedModule } from '../shared/shared.module';
import { FiltroAutomaticasComponent } from './components/Filtros/filtro-automaticas/filtro-automaticas.component';
import { FiltroSelectivasComponent } from './components/Filtros/filtro-selectivas/filtro-selectivas.component';
import { FiltroControPymeComponent } from './components/Filtros/filtro-contro-pyme/filtro-contro-pyme.component';
import { FiltroComexTmecComponent } from './components/Filtros/filtro-comex-tmec/filtro-comex-tmec.component';
import { FiltroTMECComponent } from './components/Filtros/filtro-tmec/filtro-tmec.component';
import { FiltroTurismoComponent } from './components/Filtros/filtro-turismo/filtro-turismo.component';


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
    TableTurismoComponent,
    TableReestructurasComponent,
    FormReestructurasComponent,
    SteperComponent,
    FiltroAutomaticasComponent,
    FiltroSelectivasComponent,
    FiltroControPymeComponent,
    FiltroComexTmecComponent,
    FiltroTMECComponent,
    FiltroTurismoComponent

  ],
  imports: [
    CommonModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],

  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ]
})
export class AsesorComexModule { }
