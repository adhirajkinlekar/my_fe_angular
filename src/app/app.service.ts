import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnDestroy {

  // BehaviorSubject is a type of Subject, which is a special type of Observable that allows values to be multicasted to many Observers. 
  // The unique feature of BehaviorSubject is that it stores the latest value that it emitted, and any new subscriber immediately receives the latest value even if they subscribe after the value was emitted.
  
  private authStatusSubscription!: Subscription
  public isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public authStatusText = 'Sign In';

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {

   this.checkLoggedIn(document.defaultView?.localStorage);

   this.subscribeToAuthStatus();
  }

  private checkLoggedIn(localStorage: Storage | undefined): void {

    if (localStorage) {

      const token = localStorage.getItem('JWT_TOKEN');

      console.log({token})
      if (token) this.isLoggedIn$.next(true)
       
   }
  }

   private subscribeToAuthStatus(): void {

    this.authStatusSubscription = this.isLoggedIn$.subscribe(isLoggedIn => {

      this.authStatusText = isLoggedIn ? 'Sign Out' : 'Sign In';
    });
  }

  public ngOnDestroy(): void {

    if (this.authStatusSubscription) this.authStatusSubscription.unsubscribe();
    
  }
  }
