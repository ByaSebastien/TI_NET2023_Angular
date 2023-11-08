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

  constructor(
    private _authService: FakeAuthService
  ) { }

  onSubmit(): void {
    let loginForm: FakeLoginForm = {
      username: this.username,
      password: this.password
    }
    if (this._authService.login(loginForm)) {
      console.log('Succeed');
    } else {
      console.log('Failed');
    }
  }
}
