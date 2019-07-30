import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.serive';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName',{static: false}) nameInputRef: ElementRef;
  @ViewChild('inputAmount',{static: false}) amountInputRef: ElementRef;

  constructor(private shoplistService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
   const ingredName = this.nameInputRef.nativeElement.value;
   const ingredAmount = this.amountInputRef.nativeElement.value; 
   const newIngerdiant = new Ingredient(ingredName,ingredAmount);
   this.shoplistService.addIngrediant(newIngerdiant);
  }

}
