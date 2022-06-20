import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './start/login.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    ModalComponent,

  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    LoginComponent,
    ModalComponent
  ]
})
export class SharedModule { }
