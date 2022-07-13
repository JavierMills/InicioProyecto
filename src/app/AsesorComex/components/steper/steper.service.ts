import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteperService {

  menuOrigen$ = new BehaviorSubject(null);

  steper = [
    {paso:"paso1", status:"completo"},
    {paso:"paso2", status:"activo"},
    {paso:"paso3", status:"incompleto"},
    {paso:"paso4", status:"incompleto"},
    {paso:"paso5", status:"incompleto"},
    {paso:"paso6", status:"incompleto"},
    {paso:"paso7", status:"incompleto"},
    {paso:"paso8", status:"incompleto"},
    {paso:"paso9", status:"incompleto"},
    {paso:"paso10", status:"incompleto"},
    {paso:"paso11", status:"incompleto"},
    {paso:"paso12", status:"incompleto"},
    {paso:"paso13", status:"incompleto"}
  ]

  

  constructor() { 
    
  }

  setActive(paso:string){
    let incomplet = false;   
    this.steper.map((item:any)=>{
      item.status = "completo";  
      if (item.paso == paso) {
        item.status = "activo";
        incomplet = true;
      }
      else if(incomplet){
        item.status = "incompleto";
      }      
      return item;
    });
    return this.steper;
  }

  getStatus(paso:string){
    let status = "";
     this.steper.forEach((element:any) => {
      if (element.paso == paso) {
        status = element.status;
        
      }
    });
    return status;
   }

   setMenuOrigen(menu:any){
    this.menuOrigen$.next(menu);
   }

   getMenuOrigen():Observable<any>{
    return this.menuOrigen$;
   }
}