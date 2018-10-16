import { Component, OnInit } from '@angular/core';
import {ITEM_MOCKS} from '../mock-up';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  items = ITEM_MOCKS;
  constructor(private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
  }
  selectedItem(val) {
    console.log(val.price);
    this.router.navigate(['/products']);
  }
  gotTo(page) {

    if (page === 'console') {
      this.router.navigate(['/console']);
    }
  }
}
