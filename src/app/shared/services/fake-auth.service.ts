import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FakeLoginForm } from 'src/app/models/fakeLoginForm';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  private _currentUser: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);


  isConnected: boolean = false
  constructor() { }


  get currentUser(): string | undefined {
    return this._currentUser.value;
  }

  get currentUser$(): Observable<string | undefined> {
    return this._currentUser.asObservable();
  }

  login(loginForm: FakeLoginForm) {
    if (loginForm.username === 'Bambino' && loginForm.password === 'Test1234=') {
      this.isConnected = true
      localStorage.setItem("isConnected", "true");
      this._currentUser.next("Bambino");
    }
  }

  logout() {
    this.isConnected = false
    localStorage.setItem("isConnected", "false");
    this._currentUser.next(undefined);
  }
}
