import { Component, OnInit } from '@angular/core';
import { SteperService } from './steper.service';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent implements OnInit {

  constructor(private steperService:SteperService) { 
  
  }
  ngOnInit(): void {
  }

  getStatus(paso:string){
    return this.steperService.getStatus(paso);
  }
}
