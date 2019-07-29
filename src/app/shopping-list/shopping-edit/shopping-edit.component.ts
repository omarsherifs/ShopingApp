import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') nameInputRef: ElementRef;
  @ViewChild('inputAmount') amountInputRef: ElementRef;
  @Output() ingrediantAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
   const ingredName = this.nameInputRef.nativeElement.value;
   const ingredAmount = this.amountInputRef.nativeElement.value; 
   const newIngerdiant = new Ingredient(ingredName,ingredAmount);
   this.ingrediantAdded.emit(newIngerdiant);
  }

}
