import { CanActivateFn, Router } from '@angular/router';
import { FakeAuthService } from './services/fake-auth.service';
import { inject } from '@angular/core';


export const isauthGuard: CanActivateFn = (route, state) => {

  let service : FakeAuthService = inject(FakeAuthService)
  let router : Router = inject(Router)
  console.log(service.isConnected);

  if(service.isConnected) {
    return true
  }
  else {
    router.navigate(["toto"])
    return false
  }

};
