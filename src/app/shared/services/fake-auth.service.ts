import { Injectable } from '@angular/core';
import { FakeLoginForm } from 'src/app/models/fakeLoginForm';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  constructor() { }

  login(loginForm: FakeLoginForm): boolean {
    return loginForm.username === 'Bambino' && loginForm.password === 'Test1234=';
  }
}
