import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table-hotelero',
  templateUrl: './table-hotelero.component.html',
  styleUrls: ['./table-hotelero.component.scss']
})
export class TableHoteleroComponent implements OnInit {


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
