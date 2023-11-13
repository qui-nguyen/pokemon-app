import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';


export function authGuard(): CanActivateFn {
  // console.log('Guard bien appelé !');
  // const oauthService: AuthService = inject(AuthService); ❌ //needs to be used inside the inner return method, and not the outer

  return () => {
    const router: Router = inject(Router);
    const oauthService: AuthService = inject(AuthService);

    if (oauthService.isLoggedIn) {
      return true;
    }
    router.navigate([oauthService.redirectUrl])
    return false;
  };
};
