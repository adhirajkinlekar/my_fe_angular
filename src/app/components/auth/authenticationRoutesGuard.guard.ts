import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, Observable, skipWhile, take, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationRoutesGuard implements CanActivate {

  constructor(private appService: AppService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean   {

    return this.appService.isLoggedIn$.pipe(
      skipWhile((value) => value === null),
      map((value) => value!), // asserts that value will always be a boolean and not a null
      map(value=> {

        if(value == true) return false;
        else return true
      }),
      take(1), 
      tap(isLoggedIn => {
 
        console.log({isLoggedIn_sign_in: isLoggedIn})
        if(isLoggedIn == false) this.router.navigateByUrl('/') 
      })
    );
  }
}

// the guard works well except for showing the sign_in component first when visiting the protected routes while the user is logged in