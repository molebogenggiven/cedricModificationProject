import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { GetServiceFromSpring } from '../Services/getServiceFromSpring';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  signUpForm: FormGroup;
   email = 'molebogen';
  constructor(private service: GetServiceFromSpring, private route: Router) { }

  ngOnInit() {

    //this.service.setCheckSideBarStatus();

    // let x = setInterval(() =>{

    //   this.route.navigate(["/appComponent"]);

    //       clearInterval(x);
    // },500);

    // this.route.navigate(["/editUserComponent"]);
    
    console.log('Email is'+ this.email)

    setTimeout(() => {
      // if (_.intersectionWith(9, 9, _.isEqual).length == 0) {
      //   //##### notify user in case of update
      // //  this.notification.notifiy({ header: "New", body: "Data Updated" });
      //   console.log("updated");
      // }
    }, 5000);
  }
 onSubmit () {}

}
