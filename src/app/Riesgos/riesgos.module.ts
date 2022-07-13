import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FormComponent } from './components/form/form.component';
import { AsesorComexModule } from '../AsesorComex/asesor-comex.module';
import { SharedModule } from '../shared/shared.module';
import { RiesgosComponent } from './pages/riesgos/riesgos.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavComponent,
    FormComponent,
    RiesgosComponent,
  ],
  imports: [
    CommonModule,
    AsesorComexModule,
    SharedModule,
    RouterModule,
    FormsModule


  ]
})
export class RiesgosModule { }
