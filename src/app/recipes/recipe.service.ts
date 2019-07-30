import { Recipe } from './recipe-list/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeSrevice {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[]=[
        new Recipe("test","text","https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")
      ];

      getRecipes(){
          return this.recipes.slice();
          // using slice ti create a new copy of recipes array
      }
}