import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];
  //   {
  //     id: 'r1',
  //     title: 'Schnitzel',
  //     imageUrl:
  //       'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
  //     ingredients: ['French Fries', 'Pork Meat', 'Salad'],
  //   },
  //   {
  //     id: 'r2',
  //     title: 'Spaghetti',
  //     imageUrl:
  //       'https://bakerbynature.com/wp-content/uploads/2013/12/IMG_5986-2-480x270.jpg',
  //     ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
  //   },
  // ];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }
}
