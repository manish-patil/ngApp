import { Component, OnInit } from '@angular/core';

import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title: string = "Users";
  users: User[];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getUsers().subscribe((users: User[]) => {
      this.users = users;

      this.users.map(user => user.posts = []); // Initializing posts.
    })

    this.dataService.getPosts().subscribe((posts: Post[]) => {
      posts.map(post => {
        let user = this.users.filter(user => user.id == post.userId)[0];
        
        user.posts.push(post);
      })
    })
  }
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address?: Address,
  phone?: string,
  website?: string
  company?: {},
  posts?: Post[]
}

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geolat?: number,
  geolng?: number
}

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}