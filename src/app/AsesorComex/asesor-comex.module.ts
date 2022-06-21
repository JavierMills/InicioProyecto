import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AsesorcomexComponent } from './pages/asesorcomex/asesorcomex.component';
import { FormComponent } from './form/form.component';
import { FolioComponent } from './components/folio/folio.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    AsesorcomexComponent,
    FormComponent,
    FolioComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    ComponentsComponent,
    AsesorcomexComponent
  ]
})
export class AsesorComexModule { }
