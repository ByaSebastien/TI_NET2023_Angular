import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from './shared/services/fake-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TI_NET2023_Angular';

  constructor(
    private _authService: FakeAuthService
  ) { }
  ngOnInit(): void {
    let isConnected = localStorage.getItem("isConnected");
    if (isConnected) {
      if (isConnected === "true") {
        this._authService.isConnected = true;
      }
    }
  }
}
