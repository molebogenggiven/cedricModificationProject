import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  signUpForm: FormGroup;
   email = 'molebogen';
  constructor() { }

  ngOnInit() {
    console.log('Email is'+ this.email)
  }
  onSubmit () {}

}
