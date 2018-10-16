import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
import {Router} from '@angular/router';

@Component({
  selector: 'app-submit-code',
  templateUrl: './submit-code.component.html',
  styleUrls: ['./submit-code.component.css']
})
export class SubmitCodeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  messageError: string;
  @ViewChild('f') signUpForm: NgForm;
  jsonMessage = {
    username: '',
    password: '',
    passwordVerify: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    title: '',
    gender: '',
    code: ''
  };

  constructor(private formBuilder: FormBuilder, private getServiceFromSpring: GetServiceFromSpring, private route: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      verifyCode: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.jsonMessage.username = this.getServiceFromSpring.getEmail();
    this.jsonMessage.code = this.signUpForm.value.userData.verificationCode;
    console.log(this.signUpForm.value.userData.verificationCode);
    this.getServiceFromSpring.submitVerificationDetails(this.jsonMessage).subscribe(
    (response) => {
      const resSTR = JSON.stringify(response);
      const resJson = JSON.parse(resSTR);
      console.log(resJson._body);
      if (resJson._body !== null) {
        this.route.navigate(['/userDataBoard']);
      } else if (resJson._body === 'failed') {
        this.messageError = 'please enter valid credentials';
        // this.route.navigate(['/login']);
      }
      }
    );

}}
