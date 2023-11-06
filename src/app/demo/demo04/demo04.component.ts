import { Component } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.scss']
})
export class Demo04Component {

  prenom: string = "";
  childMessage: string = "";

  reactToChildren(message: string): void {
    this.childMessage = message;
  }
}
