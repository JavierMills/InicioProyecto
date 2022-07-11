import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './start/login.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SteperComponent } from '../AsesorComex/components/steper/steper.component';



@NgModule({
  declarations: [
    LoginComponent,
    ModalComponent,
    HeaderComponent,
    SteperComponent

  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    LoginComponent,
    ModalComponent,
    HeaderComponent,
    SteperComponent
  ]
})
export class SharedModule { }
