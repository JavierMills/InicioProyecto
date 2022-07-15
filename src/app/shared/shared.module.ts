import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './start/login.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SteperComponent } from '../AsesorComex/components/steper/steper.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    ModalComponent,
    HeaderComponent,
    SteperComponent

  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    ModalComponent,
    HeaderComponent,
    SteperComponent
  ]
})
export class SharedModule { }
