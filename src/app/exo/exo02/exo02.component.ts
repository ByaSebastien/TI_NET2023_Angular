import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-exo02',
  templateUrl: './exo02.component.html',
  styleUrls: ['./exo02.component.scss']
})
export class Exo02Component {

  productList: Product[] = [];
  productName: string = "";

  add(): void {
    if (this.productName.trim() === '') {
      this.productName = '';
      return;
    }
    let existingProduct: Product | undefined = this.productList.find(p => p.name === this.productName);
    if (existingProduct) {
      existingProduct.quantity += 1;
      this.productName = '';
      return;
    }
    let product: Product = {
      name: this.productName,
      quantity: 1
    }
    this.productName = '';
    this.productList.push(product);
  }
  delete(i: number): void {
    this.productList.splice(i, 1);
  }
  minusOne(i: number): void {
    this.productList[i].quantity -= 1;
    if (this.productList[i].quantity === 0) {
      this.productList.splice(i, 1);
    }
  }
  addOne(i: number): void {
    this.productList[i].quantity += 1;
  }
}
