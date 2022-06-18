import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './start/login.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    LoginComponent,
    ModalComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    ModalComponent
  ]
})
export class SharedModule { }
