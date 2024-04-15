import { Component, ElementRef, QueryList, ViewChild, ViewChildren, HostBinding, HostListener, AfterViewInit  } from '@angular/core';
import { BankDetails } from '../communication.interface'; 
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit{

  // definate assingment assersion
  bankDetails!: BankDetails;
  
  // { static: true } as a second argument needs to be applied to ALL usages of @ViewChild() (and also @ContentChild() if you plan on accessing the selected element inside of ngOnInit()

  @ViewChild('h1', { read: ElementRef, static: true }) h1!: ElementRef;

  @ViewChildren('h2', { read: ElementRef  }) h2s!: QueryList<ElementRef>;  

  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  
  @ViewChildren(ChildComponent) childComponents!: QueryList<ChildComponent>; // for components

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered!');
    // Additional actions can be performed here
  }
  @HostBinding('style.color') textColor: string = 'black';

  constructor() { }

  ngOnInit(): void {
    this.h1.nativeElement.style.display = 'none';
  }

  ngAfterViewInit() {
    this.h2s.forEach(h2 => {
      h2.nativeElement.style.display = 'none';
    });  }


  receiveMessage(bankDetails: BankDetails) {
    this.bankDetails = bankDetails;
  }
}
