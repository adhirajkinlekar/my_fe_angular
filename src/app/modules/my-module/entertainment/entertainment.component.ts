import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.scss'
})
export class EntertainmentComponent {

  activeTab: string = 'pro_wrestling';  

  constructor(private activatedroute: ActivatedRoute){ }

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      // console.log(data); 
    })
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


}
