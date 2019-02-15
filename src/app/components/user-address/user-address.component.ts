import { Component, OnInit, Input } from '@angular/core';

import { Address } from "../user/user.component";

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  @Input()
  address: Address

  constructor() { }

  ngOnInit() {
    // console.log(this.address)
  }

}
