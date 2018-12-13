import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private users: User[];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    })
  }
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geolat: number,
  geolng: number
}