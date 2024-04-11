import { Component,EventEmitter,Input, Output } from '@angular/core';
import { BankDetails } from '../communication.interface'; 

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input() title = "";
  @Input() description = "";
  @Input() tag = "";
  @Input() imageURL = "";
  @Input() isActive = false; 

  // - child to parent
  @Output() messageEvent = new EventEmitter<BankDetails>();

  sendMessage() {
    this.messageEvent.emit(
      { 
        name: 'Bank of America',
        tag: 'bank_of_america', 
        message: 'These values were passed from the child component into the parent component' 
      });
  }
}
