import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  filtroStatus$ = new BehaviorSubject(null);

  constructor() { }

  setFiltroStatus(filter:any){
    this.filtroStatus$.next(filter);
  }

  getFiltroStatus():Observable<any>{
    return this.filtroStatus$;
   }
}
