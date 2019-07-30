import { Recipe } from './recipe-list/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.serive';

@Injectable()
export class RecipeSrevice {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[]=[
        new Recipe("Stack with Potatos",
                  "Good American Plate",
                  "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
                   [ new Ingredient("Meat",1),
                     new Ingredient("Potatos",4)])];

      constructor(private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
          // using slice ti create a new copy of recipes array
      }

      addIngToShopList(ings :Ingredient[]){
        this.slService.addIng(ings);
        
      }

 }