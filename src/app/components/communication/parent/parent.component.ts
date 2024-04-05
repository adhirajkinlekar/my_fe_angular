import { Component } from '@angular/core';
import { BankDetails } from '../communication.interface'; 

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  // definate assingment assersion
  bankDetails!: BankDetails;

  constructor() { }

  ngOnInit(): void {
   
  }

  receiveMessage(bankDetails: BankDetails) {
    this.bankDetails = bankDetails;
  }
}
