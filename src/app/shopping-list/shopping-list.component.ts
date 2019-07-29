import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingredient[] =[
    new Ingredient('orange',5),
    new Ingredient('apple',4)
  ];

  constructor() { }

  ngOnInit() {
  }
  onIngrediantAdded( ing:Ingredient){
   this.ingrediants.push(ing);
  }

}
