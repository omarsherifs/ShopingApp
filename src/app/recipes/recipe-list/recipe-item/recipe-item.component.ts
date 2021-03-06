import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeSrevice } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe :Recipe;



  constructor(private recipeService: RecipeSrevice) { }

  ngOnInit() {

  }

  onSelcted(){
    this.recipeService.selectedRecipe.emit(this.recipe);
  }

}
