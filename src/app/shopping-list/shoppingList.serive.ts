import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingrediants: Ingredient[] =[
        new Ingredient('orange',5),
        new Ingredient('apple',4)
      ];

    getIngrediants(){
        return this.ingrediants.slice();
    }

    addIngrediant(ingredient:Ingredient){
        this.ingrediants.push(ingredient);

    }
    
}