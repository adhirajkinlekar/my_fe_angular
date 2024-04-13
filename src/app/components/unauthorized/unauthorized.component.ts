import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.scss'
})
export class UnauthorizedComponent {

  constructor(private router: Router, public appService:AppService) { }

  ngOnInit(): void {
  }

  navigateToLogin() {
    this.router.navigate(['/sign_in']); // Replace 'login' with the actual route to your login page
  }
}
