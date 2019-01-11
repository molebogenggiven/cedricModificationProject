
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {RegistrationService} from './RegistrationService';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  onTitleSelected(event: any) {
    // console.log('value is :' + value);
    this.userDetails.title = event.target.value;
    //
    //this.setTitle(value);
  }

  signUpForm: FormGroup;
  title: any;
  messageError: string;
  forBiddenUsernames: ['Chris', 'Anna'];
  titles: string[];
  gender: string[];
  userDetails = {
    username: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    passwordVerify: '',
    title: '',
    gender: ''
  };

  constructor(private saveCustomerSrvice: GetServiceFromSpring, private route: Router) {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, Validators.required)
    });
    this.titles = ['Mr', 'Mrs', 'Miss', 'Dr', 'Adv', 'Prof'];
    this.gender = ['Male', 'Female'];
  }

  onSubmit() {
    console.log(this.signUpForm);
    //console.log('Value is' + this.getTitle());
    this.userDetails.username = this.signUpForm.value.email;
    this.userDetails.firstName = this.signUpForm.value.firstName;
    this.userDetails.lastName = this.signUpForm.value.lastName;
    this.userDetails.phoneNumber = this.signUpForm.value.phoneNumber;
    this.userDetails.password = this.signUpForm.value.password;
    this.userDetails.passwordVerify = this.signUpForm.value.confirmPassword;
    console.log(this.userDetails);
    this.saveCustomerSrvice.registerCustomerToDataBase(this.userDetails).subscribe(
      (response) => {
        const resSTR = JSON.stringify(response);
        const resJson = JSON.parse(resSTR);
        const details = response.json()
        console.log('The value is'+ details.status);
        console.log(response);
        console.log(resJson._body);
        if (details.status === 'Success') {
          // resJson._body !== null
          this.saveCustomerSrvice.setEmail(resJson._body.toString());
         // this.route.navigate(['/submitCode']);
          this.route.navigate(['app-send-code']);
        } else if (details.status === 'active') {
          this.route.navigate(['app-send-code']);
          this.messageError = 'please enter valid credentials';
      }else{
        
      }});
    this.signUpForm.reset();
  }
  
  onGenderSelected(gender: any) {

    this.userDetails.gender = gender.target.value;
  }
  
 
}

//   forBiddenNames(control: FormControl): {[s: string]: boolean} {
//     if (this.forBiddenUsernames.indexOf(control.value)) {
//       return{'nameIsForBidden': true};
//     }
//     return null;
//   }
// }
