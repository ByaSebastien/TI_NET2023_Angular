import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-enfant-exo03',
  templateUrl: './enfant-exo03.component.html',
  styleUrls: ['./enfant-exo03.component.scss']
})
export class EnfantExo03Component {

  shoppingList!: Product[];

  constructor(
    private _shoppingListService: ShoppingListService
  ) {
    this.shoppingList = _shoppingListService.getProducts();
  }

  delete(index: number): void {
    this._shoppingListService.delete(index);
  }

  minusOne(index: number): void {
    this._shoppingListService.minusOne(index);
  }

  plusOne(index: number): void {
    this._shoppingListService.plusOne(index);
  }
}
