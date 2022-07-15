import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesInternacionalesComponent } from './pages/operaciones-internacionales/operaciones-internacionales.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { AsesorComexModule } from '../AsesorComex/asesor-comex.module';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    OperacionesInternacionalesComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AsesorComexModule,
    DataTablesModule
  ],
})
export class OperacionInternacionalModule { }
