import { Injectable } from '@angular/core';
import { FakeLoginForm } from 'src/app/models/fakeLoginForm';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  isConnected : boolean = false
  constructor() { }

  login(loginForm: FakeLoginForm) {
    if( loginForm.username === 'Bambino' && loginForm.password === 'Test1234=')
      this.isConnected = true
  }

  logout() {
    this.isConnected = false
  }
}
