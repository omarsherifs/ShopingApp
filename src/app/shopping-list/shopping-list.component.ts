import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.serive';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingredient[] =[];

  constructor(private shopListService:ShoppingListService) { }

  ngOnInit() {
    this.ingrediants = this.shopListService.getIngrediants();
    this.shopListService.ingrendentChanaged.subscribe((ingredients: Ingredient[])=>{
      this.ingrediants = ingredients;
    });
  }

}
