import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
      // this.allUsers = res.data;
      // // this.dtTrigger.next(0);
      // console.log(this.allUsers);

  }

ngOnDestroy(): void {
  this.dtTrigger.unsubscribe();
}


  // ngOnDestroy(): void {

  //     this.dtTrigger.unsubscribe();

  // }


// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Subject } from 'rxjs';
// import { Person } from '../person';

// import 'rxjs/add/operator/map';

// @Component({
//   selector: 'app-angular-way',
//   templateUrl: 'angular-way.component.html'
// })
// export class AngularWayComponent implements OnDestroy, OnInit {

//   dtOptions: DataTables.Settings = {};
//   persons: Person[] = [];

//   // We use this trigger because fetching the list of persons can be quite long,
//   // thus we ensure the data is fetched before rendering
//   dtTrigger: Subject<any> = new Subject<any>();

//   constructor(private httpClient: HttpClient) { }

//   ngOnInit(): void {
//     this.dtOptions = {
//       pagingType: 'full_numbers',
//       pageLength: 2
//     };
//     this.httpClient.get<Person[]>('data/data.json')
//       .subscribe(data => {
//         this.persons = (data as any).data;
//         // Calling the DT trigger to manually render the table
//         this.dtTrigger.next();
//       });
//   }

//   ngOnDestroy(): void {
//     // Do not forget to unsubscribe the event
//     this.dtTrigger.unsubscribe();
//   }
// }
}
