import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaProgramaComponent } from './components/alta-programa/alta-programa.component';
import { NavComponent } from './components/nav/nav.component';
import { CatalogoProgramasComponent } from './components/catalogo-programas/catalogo-programas.component';
import { CreditogtiaComponent } from './components/creditogtia/creditogtia.component';
import { GtiaClienteComponent } from './components/gtia-cliente/gtia-cliente.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AsesorComexModule } from '../AsesorComex/asesor-comex.module';
import { GarantiasComponent } from './pages/garantias/garantias.component';
import { FormComponent } from './components/form/form.component';
import { TableSeleccionComponent } from './components/table-seleccion/table-seleccion.component';



@NgModule({
  declarations: [
    AltaProgramaComponent,
    NavComponent,
    CatalogoProgramasComponent,
    CreditogtiaComponent,
    GtiaClienteComponent,
    GarantiasComponent,
    FormComponent,
    TableSeleccionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AsesorComexModule
  ]
})
export class GarantiasModule { }
