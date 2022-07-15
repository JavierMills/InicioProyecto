import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistacomexComponent } from './pages/especialistacomex/especialistacomex.component';
import { NavComponent } from './components/nav/nav.component';
import { AsesorComexModule } from '../AsesorComex/asesor-comex.module';
import { DataTablesModule } from 'angular-datatables';
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
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    EspecialistacomexComponent,
    NavComponent,
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
    FormReestructurasComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    SharedModule,
    AsesorComexModule

  ],
  exports:[
    EspecialistacomexComponent
  ]
})
export class EspecialistacomexModule { }
