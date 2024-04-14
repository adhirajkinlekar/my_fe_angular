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
  public readonly isLoggedIn$ = new BehaviorSubject<boolean | null>(null); // value of this BehaviorSubject should never be set to null after initial initialization
  public authStatusText = 'Sign In';

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {

   this.checkLoggedIn(document.defaultView?.localStorage); 

   this.subscribeToAuthStatus();
  }

  private checkLoggedIn(localStorage: Storage | undefined): void {

    if (localStorage) {

      const token = localStorage.getItem('JWT_TOKEN');

      if (token) this.toggleloggedInObservable(true);

      else this.toggleloggedInObservable(false);
   }

   else this.toggleloggedInObservable(false);
  }

   private subscribeToAuthStatus(): void {

    this.authStatusSubscription = this.isLoggedIn$.subscribe(isLoggedIn => {

      this.authStatusText = isLoggedIn ? 'Sign Out' : 'Sign In';
    });
  }

  public handleAuthStatus() {

    const isLoggedIn = this.isLoggedIn$.getValue();
  
    if (isLoggedIn) {

      localStorage.removeItem('JWT_TOKEN');

      this.toggleloggedInObservable(false);
    }

    const redirectTo = isLoggedIn ? '/' : '/sign_in';
    
    this.router.navigate([redirectTo]);
  }

  public ngOnDestroy(): void {

    if (this.authStatusSubscription) this.authStatusSubscription.unsubscribe();
    
  }

  public toggleloggedInObservable(value: boolean){

    this.isLoggedIn$.next(value)
  }
  }
