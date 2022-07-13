import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { AsesorComexModule } from '../AsesorComex/asesor-comex.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AuditoriaComponent } from './pages/auditoria/auditoria.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent,
    FormComponent,
    AuditoriaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AsesorComexModule,
    FormsModule,
    RouterModule,
    DataTablesModule
  ]
})
export class AuditoriaModule { }
