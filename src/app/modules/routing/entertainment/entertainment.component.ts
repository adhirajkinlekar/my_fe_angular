import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.scss'
})
export class EntertainmentComponent {

  constructor(private activatedroute: ActivatedRoute){ }

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      // console.log(data); 
    })
  }


}
