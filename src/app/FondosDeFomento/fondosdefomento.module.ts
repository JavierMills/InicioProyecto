import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FondosdefomentoComponent } from './pages/fondosdefomento/fondosdefomento.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FondosdefomentoComponent,
    NavComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    FondosdefomentoComponent
  ]
})
export class FondosdefomentoModule { }
