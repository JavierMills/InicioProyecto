import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistacomexComponent } from './pages/especialistacomex/especialistacomex.component';
import { NavComponent } from './components/nav/nav.component';
import { AsesorComexModule } from '../AsesorComex/asesor-comex.module';
import { TableComponent } from './components/table/table.component';
import { DataTablesModule } from 'angular-datatables';
import { FormComponent } from './components/form/form.component';
import { FormSelectivasComponent } from './components/form-selectivas/form-selectivas.component';
import { FormTMECComponent } from './components/form-tmec/form-tmec.component';
import { FormPYMEComponent } from './components/form-pyme/form-pyme.component';
import { FormComexTMECComponent } from './components/form-comex-tmec/form-comex-tmec.component';
import { FormTURISMOComponent } from './components/form-turismo/form-turismo.component';
import { BitacoraProcesoComponent } from './components/bitacora-proceso/bitacora-proceso.component';




@NgModule({
  declarations: [
    EspecialistacomexComponent,
    NavComponent,
    TableComponent,
    FormComponent,
    FormSelectivasComponent,
    FormTMECComponent,
    FormPYMEComponent,
    FormComexTMECComponent,
    FormTURISMOComponent,
    BitacoraProcesoComponent


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
