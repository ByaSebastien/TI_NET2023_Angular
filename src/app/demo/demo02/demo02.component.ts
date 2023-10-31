import { Component } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.scss']
})
export class Demo02Component {
  myString: string = "Coucou les loulous";
  myDate: Date = new Date();
  myNumber: number = 42;
}
