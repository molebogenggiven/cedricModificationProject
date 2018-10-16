import { Component, OnInit } from '@angular/core';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
import {Response} from '@angular/http';

@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.css']
})
export class ListAllUsersComponent implements OnInit {
  users: any[];
  constructor(private userService: GetServiceFromSpring) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        (response: Response) => {
           this.users = response.json();
           console.log(this.users);
        },
        (error) => console.log(error)
      );
  }
  deleteUser(users) {}
  editUser(users) {}
  addUser(users) {}


}
