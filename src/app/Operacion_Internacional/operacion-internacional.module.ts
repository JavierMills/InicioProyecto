import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesInternacionalesComponent } from './pages/operaciones-internacionales/operaciones-internacionales.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    OperacionesInternacionalesComponent,
    NavComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class OperacionInternacionalModule { }
