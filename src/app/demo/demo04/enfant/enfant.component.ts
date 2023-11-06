import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {

  @Input() prenomParent!: string;
  @Output() eventEnfant!: EventEmitter<string>;
  message: string = "";

  constructor() {
    this.eventEnfant = new EventEmitter();
  }

  emitEvent(): void {
    this.eventEnfant.next(this.message);
  }
}
