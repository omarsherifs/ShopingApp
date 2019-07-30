import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingrendentChanaged = new EventEmitter<Ingredient[]>();
    private ingrediants: Ingredient[] =[
        new Ingredient('orange',5),
        new Ingredient('apple',4)
      ];

    getIngrediants(){
        return this.ingrediants.slice();
    }

    addIngrediant(ingredient:Ingredient){
        this.ingrediants.push(ingredient);
        this.ingrendentChanaged.emit(this.ingrediants.slice());
    }
    
    addIng(ing:Ingredient[]){
        this.ingrediants.push(...ing);
        this.ingrendentChanaged.emit(this.ingrediants.slice());
    }
}