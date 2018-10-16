import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CheckOutComponent} from './service.component';
import {MonthAndYear} from './MonthAndYear';
import {GetServiceFromSpring} from '../../Services/getServiceFromSpring';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  signUpForm: FormGroup;
  monthNames: MonthAndYear[];
  years: string[];
  countries: string[];
  jsonMessage: any;
  checkoutData: {
    // merchant details
    'merchant_id': '10009671',
    'merchant_key': 'r6ooy7r3i6h4i',
    'return_url': '',
    'cancel_url': '',
    'notify_url': '',
    // Buyer details
    'name_first': 'Given',
    'name_last': 'Kubyana',
    'email_address': 'sbtu01@payfast.co.za',
    // Transaction details
    'm_payment_id': '1',
    // amount
    'amount': '20',
    'item_name': 'Bread',
    'item_description': 'Brown Bread',
    'customer_int1': '1',
    'custom_str1': 'Hello'
  };

  constructor(private checkOutComponent: CheckOutComponent, private serviceFromSpring: GetServiceFromSpring) {
  }

  ngOnInit() {
    this.jsonMessage = this.serviceFromSpring.getProductDetails();
    this.monthNames = [{monthId: 1, monthName: 'January'},
                      {monthId: 2, monthName: 'February'},
                      {monthId: 3, monthName: 'March'},
                      {monthId: 4, monthName: 'April'},
                      {monthId: 5, monthName: 'May'},
                      {monthId: 6, monthName: 'June'},
                      {monthId: 7, monthName: 'July'},
                      {monthId: 8, monthName: 'August'},
                      {monthId: 9, monthName: 'September'},
                      {monthId: 10, monthName: 'October'},
                      {monthId: 11, monthName: 'November'},
                      {monthId: 12, monthName: 'December'}];
    this.years = ['2018', '2019', '2020', '2021', '2022', '2023', '2014'];
    this.countries = ['South Africa', 'Botswana', 'Zimbabwe', 'Zambia', 'Angola', 'Namibia'];
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, Validators.required)
    });
  }
  submitPaymentDetails() {}

  onSubmit() {
    console.log(this.signUpForm);
    // this.userDetails.username = this.signUpForm.value.email;
    // this.userDetails.firstName = this.signUpForm.value.firstName;
    // this.userDetails.lastName = this.signUpForm.value.lastName;
    // this.userDetails.phoneNumber = this.signUpForm.value.phoneNumber;
    // this.userDetails.password = this.signUpForm.value.password;
    // this.userDetails.passwordVerify = this.signUpForm.value.confirmPassword;
    // this.registrationService.registerUser(this.userDetails).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // );
    this.checkOutComponent.submitCheckOutData(this.checkoutData).
    subscribe((response) => console.log(response),
      (error) => console.log(error));
  }

}




//   forBiddenNames(control: FormControl): {[s: string]: boolean} {
//     if (this.forBiddenUsernames.indexOf(control.value)) {
//       return{'nameIsForBidden': true};
//     }
//     return null;
//   }
// }

