import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-seleccion',
  templateUrl: './table-seleccion.component.html',
  styleUrls: ['./table-seleccion.component.scss']
})
export class TableSeleccionComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  allUsers: any = [];

  constructor(private http: HttpClient) { }

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

}
