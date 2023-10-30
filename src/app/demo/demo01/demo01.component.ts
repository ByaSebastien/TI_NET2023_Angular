import { Component } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.scss']
})
export class Demo01Component {
  //Declaration d'une variable string qu'on affiche dans l html
  message: string = "Coucou les loulous";
  input: string = "";
  etat: string = "";
  isActive: boolean = true;
  jacquouille: string = "jour";

  //declaration d'une methode
  //nom de methode(param : type) :type de retour
  changeState(state: string): void {
    this.etat = state;
  }

  toggleIsActive(): void {
    this.isActive = !this.isActive;

    switch (this.jacquouille) {
      case "jour":
        this.jacquouille = "nuit"
        break;
      case "nuit":
        this.jacquouille = "jour"
        break;
    }
  }
}
