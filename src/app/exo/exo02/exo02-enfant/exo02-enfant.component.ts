import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-exo02-enfant',
  templateUrl: './exo02-enfant.component.html',
  styleUrls: ['./exo02-enfant.component.scss']
})
export class Exo02EnfantComponent {

  @Input() productListChild!: Product[];
  @Output() deleteEvent!: EventEmitter<number>;
  @Output() minusEvent!: EventEmitter<number>;
  @Output() addEvent!: EventEmitter<number>;

  constructor() {
    this.deleteEvent = new EventEmitter();
    this.minusEvent = new EventEmitter();
    this.addEvent = new EventEmitter();
  }
}
