import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private products: Product[] = [];

  constructor() { }

  getProducts() {
    return this.products;
  }

  add(product: Product): void {
    if (product.name.trim() === '') {
      return;
    }
    let existingProduct = this.products
      .find(p => p.name.toLowerCase() === product.name.toLowerCase().trim());
    if (!existingProduct) {
      this.products.push(product);
    } else {
      existingProduct.quantity += product.quantity;
    }
  }

  delete(index: number): void {
    this.products.splice(index, 1);
  }

  minusOne(index: number): void {
    this.products[index].quantity -= 1;
    if (this.products[index].quantity <= 0) {
      this.delete(index);
    }
  }

  plusOne(index: number): void {
    this.products[index].quantity += 1;
  }
}
