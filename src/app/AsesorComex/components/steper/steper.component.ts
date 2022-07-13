import { Component, OnInit } from '@angular/core';
import { SteperService } from './steper.service';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent implements OnInit {
  showSelectivas:boolean = false;
  constructor(private steperService:SteperService) { 
  
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
}
