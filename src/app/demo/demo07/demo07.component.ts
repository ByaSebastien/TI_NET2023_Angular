import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo07',
  templateUrl: './demo07.component.html',
  styleUrls: ['./demo07.component.scss']
})
export class Demo07Component {

  monTab : string[] = ["Pignouf", "Glandu", "Iconoclaste"]

  constructor(
    private router : Router
  ){}

  redirect(index : number) {
    this.router.navigate(["demo/target", index])
  }
}
