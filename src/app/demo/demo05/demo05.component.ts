import { Component } from '@angular/core';
import { FakeLoginForm } from 'src/app/models/fakeLoginForm';
import { FakeAuthService } from 'src/app/shared/services/fake-auth.service';

@Component({
  selector: 'app-demo05',
  templateUrl: './demo05.component.html',
  styleUrls: ['./demo05.component.scss']
})
export class Demo05Component {

  username: string = "";
  password: string = "";

  isConnected! : boolean
  constructor(
    private _authService: FakeAuthService
  ) { }

  ngOnInit() {
    this.isConnected = this._authService.isConnected
  }

  logout() {
    this._authService.logout()
    this.isConnected = this._authService.isConnected

  }

  onSubmit(): void {
    let loginForm: FakeLoginForm = {
      username: this.username,
      password: this.password
    }

    this._authService.login(loginForm)
    this.isConnected = this._authService.isConnected


    // if (this._authService.login(loginForm)) {
    //   console.log('Succeed');
    // } else {
    //   console.log('Failed');
    // }
  }
}
