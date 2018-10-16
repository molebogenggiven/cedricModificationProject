import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ITEM_MOCKS} from '../mock-up';
import {Http, Response} from '@angular/http';
import {ServiceComponent} from '../Login/server.service';
import {GetServiceFromSpring} from '../Services/getServiceFromSpring';
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  items = ITEM_MOCKS;
  jsonData: any;
  private getId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: Http, private services: GetServiceFromSpring) {
  }

  ngOnInit() {
    this.services.getAllProducts().subscribe(
      (response: Response) => {
        this.jsonData = response.json();
         console.log(response);
      } ,
      (error) => console.log(error)
    );
  }

  selectedItem(val: any) {
    console.log('Selected item is: ' + val.productName);
   this.services.setProductDetails(val);
    // this.getId = val.productPrice;
    // console.log(this.getId)
    // console.log('The price is: ' + val.productPrice);
    this.router.navigate(['/products']);
    }

  gotTo(page) {

    if (page === 'console') {
      this.router.navigate(['/console']);
    }
  }
  // getProduct(): number {
  //   return this.getId;
  // }
}
