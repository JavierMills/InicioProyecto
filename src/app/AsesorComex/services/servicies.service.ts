import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServiciesService {


  constructor(private http:HttpClient) { }
  users():void {
    this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
