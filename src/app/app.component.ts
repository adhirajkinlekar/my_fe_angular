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


  }
  
  // todos -
  // shared modules
  // rxjs - unicast vs multicast observables
  // reactive forms - formBuilder, FormGroup, formarray, validation
  // typescript