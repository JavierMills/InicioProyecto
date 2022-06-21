import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AsesorcomexComponent } from './pages/asesorcomex/asesorcomex.component';
import { FormComponent } from './components/form/form.component';
import { FolioComponent } from './components/Folio/folio.component';
import { RouterModule } from '@angular/router';



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
    AsesorcomexComponent,
    FormComponent,
    FolioComponent
    
  ]
})
export class AsesorComexModule { }
