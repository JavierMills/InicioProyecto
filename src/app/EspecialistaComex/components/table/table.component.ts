import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  allUsers: any = [];

  constructor(private http: HttpClient) { }

  esconder:boolean = false;
  esconderF:boolean = true;
  esconderT:boolean = false;
  showModal:boolean = false;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 40
    };

    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe( resp => {
      this.allUsers = resp;
      this.dtTrigger.next(0);
    })

  }

ngOnDestroy(): void {
  this.dtTrigger.unsubscribe();
}

mostrar(): void{
  this.esconder = true;
  this.esconderF = false;
}
mostrarTabla(){
  this.esconderT = true;
  console.log(this.esconderT)

}

}
