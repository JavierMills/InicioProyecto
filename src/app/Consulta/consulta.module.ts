import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { CreditosGtiaComponent } from './components/creditos-gtia/creditos-gtia.component';
import { StockBancomextComponent } from './components/stock-bancomext/stock-bancomext.component';
import { SharedModule } from '../shared/shared.module';
import { AsesorComexModule } from '../AsesorComex/asesor-comex.module';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent,
    CreditosGtiaComponent,
    StockBancomextComponent,
    ConsultaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AsesorComexModule
  ]
})
export class ConsultaModule { }
