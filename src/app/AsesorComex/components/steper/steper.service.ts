import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteperService {

  menuOrigen$ = new BehaviorSubject(null);

  steper = [
    {paso:"paso1", status:"completo", description:"CapturarSolicitud"},
    {paso:"paso2", status:"activo", description:"ProcesoPendienteAsesorC"},
    {paso:"paso3", status:"incompleto", description:"EspecialistaComexRech"},
    {paso:"paso4", status:"incompleto", description:"ProcesoPendienteContraloria"},
    {paso:"paso5", status:"incompleto", description:""},
    {paso:"paso6", status:"incompleto", description:"FondosDeFomento"},
    {paso:"paso7", status:"incompleto", description:"EnviadaNafinet"},
    {paso:"paso8", status:"incompleto", description:"AprobadoNafinet"},
    {paso:"paso9", status:"incompleto", description:"RechazadoNafinet"},
    {paso:"paso10", status:"incompleto", description:"CapturarSolicitud"},
    {paso:"paso11", status:"incompleto", description:"Reproceso"},
    {paso:"paso12", status:"incompleto", description:"Reproceso1"},
    {paso:"paso13", status:"incompleto", description:"Reproceso2"},
    {paso:"paso14", status:"incompleto", description:"Reproceso3"}
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

   getDescripcion(paso:string){
    return this.steper.find(item => item.paso == paso)?.description;
   }
}