import { Component, OnInit } from '@angular/core';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
import {Response} from '@angular/http';
import {MenComponent} from '../men/men.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
     productDetails: any;
     productId: number;
     productName: string;
     productPrice: number;
     productQuantity: number;
     productSize: string;
     jsonMessage: any;

  constructor(private serviceFromSpring: GetServiceFromSpring, private router: Router) { }

  ngOnInit() {
    console.log(this.serviceFromSpring.getProductDetails());
    this.jsonMessage = this.serviceFromSpring.getProductDetails();
    // this.serviceFromSpring.getProductById(this.serviceFromSpring.getProductId()).
    // subscribe(
    //   (response: Response) => {
    //     this.productDetails = response.json();
    //     this.productId = this.productDetails.productId;
    //     this.productName = this.productDetails.productName;
    //     this.productQuantity = this.productDetails.productQuantity;
    //     this.productPrice = this.productDetails.productPrice;
    //     this.productSize = this.productDetails.productSize;
    //     console.log(response);
    //     },
    //   (error) => console.log(error)
    // );
  }
  addToCart() {
    this.serviceFromSpring.setProductDetails(this.jsonMessage);
    this.router.navigate(['/cart']);
  }
  checkout() {
    this.serviceFromSpring.setProductDetails(this.jsonMessage);
    this.router.navigate(['/checkout']);
  }
}
