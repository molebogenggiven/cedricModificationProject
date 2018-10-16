import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chakalaka', 'Brown Chakalaka', 'http://www.chirundu.com/wp-content/uploads/2009/08/Chakalaka-Recipe.jpg'),
    new Recipe('Chakalaka', 'Brown Chakalaka', 'http://www.chirundu.com/wp-content/uploads/2009/08/Chakalaka-Recipe.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
