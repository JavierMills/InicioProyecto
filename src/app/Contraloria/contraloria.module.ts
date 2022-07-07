import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContraloriaComponent } from './pages/contraloria/contraloria.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { NavComponent } from './components/nav/nav.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { FormComexTmecComponent } from './components/form-comex-tmec/form-comex-tmec.component';
import { FormPymeComponent } from './components/form-pyme/form-pyme.component';
import { FormSelectivasComponent } from './components/form-selectivas/form-selectivas.component';
import { FormTmecComponent } from './components/form-tmec/form-tmec.component';
import { FormTurismoComponent } from './components/form-turismo/form-turismo.component';
import { TableComexTmecComponent } from './components/table-comex-tmec/table-comex-tmec.component';
import { TablePymeComponent } from './components/table-pyme/table-pyme.component';
import { TableSelectivasComponent } from './components/table-selectivas/table-selectivas.component';
import { TableTmecComponent } from './components/table-tmec/table-tmec.component';
import { TableTurismoComponent } from './components/table-turismo/table-turismo.component';
import { SharedModule } from '../shared/shared.module';
import { TableReestructurtasComponent } from './components/table-reestructurtas/table-reestructurtas.component';
import { FormReestructurasComponent } from './components/form-reestructuras/form-reestructuras.component';
import { FormHoteleroComponent } from './components/form-hotelero/form-hotelero.component';
import { TableHoteleroComponent } from './components/table-hotelero/table-hotelero.component';


@NgModule({
  declarations: [
    ContraloriaComponent,
    FormComponent,
    TableComponent,
    NavComponent,
    FormComexTmecComponent,
    FormPymeComponent,
    FormSelectivasComponent,
    FormTmecComponent,
    FormTurismoComponent,
    TableComexTmecComponent,
    TablePymeComponent,
    TableSelectivasComponent,
    TableTmecComponent,
    TableTurismoComponent,
    TableReestructurtasComponent,
    FormReestructurasComponent,
    FormHoteleroComponent,
    TableHoteleroComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    ContraloriaComponent
  ]
})
export class ContraloriaModule { }
