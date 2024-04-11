import { Component } from '@angular/core';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrl: './software-development.component.scss'
})
export class SoftwareDevelopmentComponent {

  activeTab: string = 'software_development';  

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
