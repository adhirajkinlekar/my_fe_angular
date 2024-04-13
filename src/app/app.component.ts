import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'my_fe_angular'; 

  constructor(public appService: AppService,private router: Router) {}


    handleAuthStatus() {

      const isLoggedIn = this.appService.isLoggedIn$.getValue();
    
      if (isLoggedIn) {

        localStorage.removeItem('JWT_TOKEN');
        this.appService.isLoggedIn$.next(false);
      }

      const redirectTo = isLoggedIn ? '/' : '/sign_in';
      
      this.router.navigate([redirectTo]);
    }
  }




  
  // todos -
  // shared modules
  // autentication and authorization
  // rxjs
  // reactive forms - formBuilder, FormGroup, formarray, validation
  // * guards
  // * resolver
  // typescript