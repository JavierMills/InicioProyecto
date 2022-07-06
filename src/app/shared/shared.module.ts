import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './start/login.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LoginComponent,
    ModalComponent,
    HeaderComponent,

  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    LoginComponent,
    ModalComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
