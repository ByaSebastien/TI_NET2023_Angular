import { Component } from '@angular/core';

@Component({
  selector: 'app-exo01',
  templateUrl: './exo01.component.html',
  styleUrls: ['./exo01.component.scss']
})
export class Exo01Component {

  second: number = 0;
  isRunning: boolean = false;
  timer: any;

  start(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(
        () => {
          this.second += 1;
        }, 1000
      )
    }
  }

  pause(): void {
    if (this.isRunning) {
      clearInterval(this.timer);
      this.isRunning = false;
    }
  }

  reset(): void {
    clearInterval(this.timer);
    this.isRunning = false;
    this.second = 0;
  }
}
