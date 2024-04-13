import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {

    constructor(private appService: AppService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      return this.appService.isLoggedIn$.pipe(

        take(1), 
        map(isLoggedIn => {

          const url = state.url;

          if (isLoggedIn) {

            if (url === '/sign_in') {
              // Redirect to home if trying to access sign-in page while already logged in
              return this.router.createUrlTree(['/']);
            } 
            else return true; 

          }
           else {

            if (url !== '/sign_in') {
              // Redirect to sign-in page if trying to access any protected page while not logged in
              return this.router.createUrlTree(['/sign_in']);
            } 
            else return true;
          }
        })
      );
    }
  }
 // it's generally a good practice to unsubscribe from observables when they are no longer needed to prevent potential memory leaks. 
 // However, in the context of canActivate guards in Angular, there's no explicit need to unsubscribe from the observables returned by canActivate.
 // This is because Angular's router automatically handles the subscription and unsubscribes from the observables returned by canActivate guards after the navigation is complete.
 // So, while it's a good practice to unsubscribe from observables in other parts of your application to avoid memory leaks, 
 // you don't need to worry about unsubscribing from observables returned by canActivate guards specifically in Angular.


 // In the context of canActivate method, we need to wait for the isLoggedIn$ BehaviorSubject to emit a value (whether the user is logged in or not) before we can make a decision on whether to allow navigation or not.
 // By subscribing to isLoggedIn$, we are effectively waiting for this value to be emitted, and then we can proceed with the logic to determine whether the user is authorized to navigate to the requested route.
// Without the subscription, the code would not wait for the value to be emitted and would proceed with the logic assuming no value, which could lead to incorrect authorization decisions.