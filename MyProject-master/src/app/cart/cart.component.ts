import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    jsonMessage: any;
  constructor(private router: Router, private serviceFromSpring: GetServiceFromSpring) { }

  ngOnInit() {
    this.jsonMessage = this.serviceFromSpring.getProductDetails();
  }
  navigateToCheckOut() {
    this.router.navigate(['/app-checkout']);
  }

}
