import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log("Data Service Conneccted...");
  }

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
      .pipe(
        map((res) => {
          return res
        })
      )
  }

  getPosts(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
      .pipe(
        map((res) => {
          return res
        })
      )
  }
}
