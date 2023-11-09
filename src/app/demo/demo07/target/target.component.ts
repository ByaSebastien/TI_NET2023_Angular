import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent {

  monTab : string[] = ["Pignouf", "Glandu", "Iconoclaste"]

  selectedWord! : string
  constructor(
    private ar : ActivatedRoute
  )  {}

  ngOnInit(){
    let id = this.ar.snapshot.params["id"]
    this.selectedWord = this.monTab[id]
  }
}
