import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeSrevice } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() recipe:Recipe;
  constructor(private recService : RecipeSrevice) { }

  ngOnInit() {
  }

  onAddToShopList(){
    this.recService.addIngToShopList(this.recipe.ingerdients);
  }
}
