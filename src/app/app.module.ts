import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';


import { ComponentsComponent } from './Operacion_Internacional/components/components.component';


import { AsesorComexModule } from './AsesorComex/asesor-comex.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
