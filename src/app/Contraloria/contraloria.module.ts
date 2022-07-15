import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContraloriaComponent } from './pages/contraloria/contraloria.component';
import { NavComponent } from './components/nav/nav.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { FormComexTmecComponent } from './components/form-comex-tmec/form-comex-tmec.component';
import { FormPymeComponent } from './components/form-pyme/form-pyme.component';
import { FormSelectivasComponent } from './components/form-selectivas/form-selectivas.component';
import { FormTmecComponent } from './components/form-tmec/form-tmec.component';
import { FormTurismoComponent } from './components/form-turismo/form-turismo.component';
import { SharedModule } from '../shared/shared.module';
import { FormReestructurasComponent } from './components/form-reestructuras/form-reestructuras.component';
import { FormHoteleroComponent } from './components/form-hotelero/form-hotelero.component';
import { AsesorComexModule } from '../AsesorComex/asesor-comex.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ContraloriaComponent,
    NavComponent,
    FormComexTmecComponent,
    FormPymeComponent,
    FormSelectivasComponent,
    FormTmecComponent,
    FormTurismoComponent,
    FormReestructurasComponent,
    FormHoteleroComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    SharedModule,
    AsesorComexModule,
    RouterModule,

  ],
  exports:[
    ContraloriaComponent
  ]
})
export class ContraloriaModule { }
