import { Component, OnInit } from '@angular/core';
import { SteperService } from './steper.service';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent implements OnInit {
  showSelectivas:boolean = false;
  steperSelectiva:any;
  steper:any;
  constructor(private steperService:SteperService) { 
    this.steperSelectiva = this.steperService.getsteperSelectiva();
    this.steper = this.steperService.getsteper();
  }
  ngOnInit(): void {
    let menu = this.steperService.getMenuOrigen().subscribe((data) => {
      if (data == "Selectivas") {
        this.showSelectivas = true;
      }
      else{
        this.showSelectivas = false;
      }
    });
  }

  getStatus(paso:string){
    return this.steperService.getStatus(paso);
  }

  getStatusSelectiva(paso:string){
    return this.steperService.getStatusSelectiva(paso);
  }
}
