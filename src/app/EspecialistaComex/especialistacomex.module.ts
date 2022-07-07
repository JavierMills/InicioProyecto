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
import { ConsultagarantiaComponent } from './components/consultagarantia/consultagarantia.component';
import { FormsModule } from '@angular/forms';
import { ArchivosAdjuntosComponent } from './components/archivos-adjuntos/archivos-adjuntos.component';
import { ReestructurasComponent } from './components/reestructuras/reestructuras.component';
import { ReportesEspecialistaComponent } from './components/reportes-especialista/reportes-especialista.component';
import { FormReestructurasComponent } from './components/form-reestructuras/form-reestructuras.component';
import { TableReestructurasComponent } from './components/table-reestructuras/table-reestructuras.component';
import { TableComexTmecComponent } from './components/table-comex-tmec/table-comex-tmec.component';
import { TablePymeComponent } from './components/table-pyme/table-pyme.component';
import { TableSelectivasComponent } from './components/table-selectivas/table-selectivas.component';
import { TableTmecComponent } from './components/table-tmec/table-tmec.component';
import { TableTurismoComponent } from './components/table-turismo/table-turismo.component';
import { SharedModule } from '../shared/shared.module';




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
    BitacoraProcesoComponent,
    ConsultagarantiaComponent,
    ArchivosAdjuntosComponent,
    ReestructurasComponent,
    ReportesEspecialistaComponent,
    FormReestructurasComponent,
    TableReestructurasComponent,
    TableComexTmecComponent,
    TablePymeComponent,
    TableSelectivasComponent,
    TableTmecComponent,
    TableTurismoComponent,


  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    SharedModule

  ],
  exports:[
    EspecialistacomexComponent
  ]
})
export class EspecialistacomexModule { }
