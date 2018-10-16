import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ITEM_MOCKS} from '../mock-up';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

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
