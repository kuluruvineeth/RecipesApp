import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A test recipe","This is simply test","https://i.pinimg.com/originals/f0/94/53/f09453eba71c5fa51546f997d1b3a825.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
