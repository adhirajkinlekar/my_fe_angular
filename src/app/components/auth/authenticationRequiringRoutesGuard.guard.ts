import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, Observable, skipWhile, take, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationRequiringRoutesGuard implements CanActivate {

  constructor(private appService: AppService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean   {

    return this.appService.isLoggedIn$.pipe(
      skipWhile((value) => value === null),
      map((value) => value!), // asserts that value will always be a boolean and not a null
      take(1), 
      tap(isLoggedIn =>{

        console.log({isLoggedIn_auth_requiring: isLoggedIn})

        if(isLoggedIn == false) this.router.navigateByUrl('/sign_in') 
      })
    );
  }
}


// guards - guards are used to protect and control access to certain routes in your application. They are classes that implement specific interfaces provided by Angular's router module. There are several types of guards:

// CanActivate: This guard decides if a route can be activated. It's typically used to check if a user is authenticated before allowing access to a route.

// CanActivateChild: Similar to CanActivate but for child routes. It's used to guard child routes of a component.

// CanDeactivate: This guard decides if a route can be deactivated. It's often used to confirm with the user before leaving a page with unsaved changes.

// CanLoad: This guard is used to prevent the asynchronous loading of a module until certain conditions are met. It's commonly used to restrict access to feature modules that are lazily loaded.

// Resolve: Though not strictly a guard, resolves data before a route is activated. It's used to fetch data required for the component before the component is activated.


 // it's generally a good practice to unsubscribe from observables when they are no longer needed to prevent potential memory leaks. 
 // However, in the context of canActivate guards in Angular, there's no explicit need to unsubscribe from the observables returned by canActivate.
 // This is because Angular's router automatically handles the subscription and unsubscribes from the observables returned by canActivate guards after the navigation is complete.
 // So, while it's a good practice to unsubscribe from observables in other parts of your application to avoid memory leaks, 
 // you don't need to worry about unsubscribing from observables returned by canActivate guards specifically in Angular.


 // In the context of canActivate method, we need to wait for the isLoggedIn$ BehaviorSubject to emit a value (whether the user is logged in or not) before we can make a decision on whether to allow navigation or not.
 // By subscribing to isLoggedIn$, we are effectively waiting for this value to be emitted, and then we can proceed with the logic to determine whether the user is authorized to navigate to the requested route.
// Without the subscription, the code would not wait for the value to be emitted and would proceed with the logic assuming no value, which could lead to incorrect authorization decisions.