import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteperService {

  menuOrigen$ = new BehaviorSubject(null);

  steper = [
    {paso:"paso1", status:"activo", description:"CapturarSolicitud"},
    {paso:"paso2", status:"incompleto", description:"ProcesoPendienteAsesorC"},
    {paso:"paso3", status:"incompleto", description:"EspecialistaComexRech"},
    {paso:"paso4", status:"incompleto", description:"ProcesoPendienteContraloria"},
    {paso:"paso5", status:"incompleto", description:"FondosDeFomento"},
    {paso:"paso6", status:"incompleto", description:"EnviadaNafinet"},
    {paso:"paso7", status:"incompleto", description:"AprobadoNafinet"},
    {paso:"paso8", status:"incompleto", description:"RechazadoNafinet"},
    {paso:"paso9", status:"incompleto", description:"CapturarSolicitud"},
    {paso:"paso10", status:"incompleto", description:"Reproceso"}
  ]

  steperSelectiva = [
    {paso:"paso1", status:"activo", description:"CapturarSolicitud"},
    {paso:"paso2", status:"incompleto", description:"NegocioInternacional"},
    {paso:"paso3", status:"incompleto", description:"EnvBancomext"},
    {paso:"paso4", status:"incompleto", description:"EspecialistaComex"},
    {paso:"paso5", status:"incompleto", description:"Observaciones"},
    {paso:"paso6", status:"incompleto", description:"Formalizacion"},
    {paso:"paso7", status:"incompleto", description:"FormalizacionEspecialista"},
    {paso:"paso8", status:"incompleto", description:"PPAsesor"},
    {paso:"paso9", status:"incompleto", description:"RechazoEspecialista"},
    {paso:"paso10", status:"incompleto", description:"PPContraliria"},
    {paso:"paso11", status:"incompleto", description:"PPCartera"},
    {paso:"paso12", status:"incompleto", description:"FF"},
    {paso:"paso13", status:"incompleto", description:"Resumen"}
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

   getPasoByDescripcion(descripcion:string){
    return this.steper.find(item => item.description == descripcion)?.paso;
   }

   getsteper(){
    return this.steper;
   }

   setActiveSelectivas(paso:string){
    let incomplet = false;   
    this.steperSelectiva.map((item:any)=>{
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
    return this.steperSelectiva;
  }

  getStatusSelectiva(paso:string){
    let status = "";
     this.steperSelectiva.forEach((element:any) => {
      if (element.paso == paso) {
        status = element.status;
        
      }
    });
    return status;
   }

  //  setMenuOrigenSelectiva(menu:any){
  //   this.menuOrigen$.next(menu);
  //  }

  //  getMenuOrigen():Observable<any>{
  //   return this.menuOrigen$;
  //  }

   getDescripcionSelectiva(paso:string){
    return this.steperSelectiva.find(item => item.paso == paso)?.description;
   }

   getPasoByDescripcionSelectiva(descripcion:string){
    return this.steperSelectiva.find(item => item.description == descripcion)?.paso;
   }

   getsteperSelectiva(){
    return this.steperSelectiva;
   }
}