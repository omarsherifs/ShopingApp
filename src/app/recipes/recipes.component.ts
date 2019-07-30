import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeSrevice } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeSrevice],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor(private recipeService:RecipeSrevice) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe:Recipe)=>{
      this.selectedRecipe = recipe;
    });
  }

}
