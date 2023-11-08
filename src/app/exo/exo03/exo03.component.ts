import { Component } from '@angular/core';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-exo03',
  templateUrl: './exo03.component.html',
  styleUrls: ['./exo03.component.scss']
})
export class Exo03Component {

  productName: string = "";
  productQtt: number = 1;

  constructor(
    private _shoppingListService: ShoppingListService
  ) { }

  add(): void {
    let product: Product = {
      name: this.productName,
      quantity: this.productQtt
    };
    this._shoppingListService.add(product);
    this.productName = "";
    this.productQtt = 1;
  }
}
