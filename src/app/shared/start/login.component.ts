import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  
  myForm: FormGroup;
  errorUser:boolean = false;
  errorPass:boolean = false;

  title = 'Bootstrap';
    
  closeResult: string = '';
     
  constructor(private modalService: NgbModal, private fb:FormBuilder) {
      this.myForm = this.fb.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
      });
  }
    
  open(content:any) {
        
    this.errorUser = this.myForm.controls["user"].status != "VALID" ? true : false;

    this.errorPass = this.myForm.controls["password"].status != "VALID" ? true : false;

    if (!this.errorUser && !this.errorPass) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `${this.getDismissReason(reason)}`;
      });

      this.myForm.reset();
    }

    
    


  } 
     
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  openKeyuP(event : any) {
    this.modalService.open(event, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `${this.getDismissReason(reason)}`;
    });
  } 


}



