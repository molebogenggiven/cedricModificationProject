import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CheckOutComponent {
  constructor(private http: Http) {}

  submitCheckOutData(checkoutData: any) {

    return this.http.post('https://api.payfast.co.za/[endpoint]/[token]/[action]?testing=true', checkoutData);

  }
}


