import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title = 'my_fe_angular'; 

  lifecycleEvents: { message: string; emoji: string }[] = [];

  constructor() {
    this.pushEvent({ message: 'Constructor has been called', emoji: '🛠️' });
  }
  
  ngOnInit(): void {
    // A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, 
    // and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.
    this.pushEvent({ message: 'ngOnInit has been called', emoji: '🚀' });
  }
  
  ngOnChanges(_changes: SimpleChanges): void {
    //  A callback method that is invoked immediately after the default change detector has checked data-bound properties if at least one has changed,
    // and before the view and content children are checked.
    this.pushEvent({ message: 'ngOnChanges has been called', emoji: '🔄' });
  }
  
  ngDoCheck(): void {
    // A callback method that performs change-detection, invoked after the default change-detector runs. 
    // See KeyValueDiffers and IterableDiffers for implementing custom change checking for collections.
    this.pushEvent({ message: 'ngDoCheck has been called', emoji: '🔍' });
  }
  
  ngAfterContentInit(): void {
      // A callback method that is invoked immediately after the default change detector has completed checking all of the directive's content.
    this.pushEvent({ message: 'ngAfterContentInit has been called', emoji: '📦' });
  }
  
  ngAfterContentChecked(): void {
      // A callback method that is invoked immediately after the default change detector has completed checking all of the directive's content.
    this.pushEvent({ message: 'ngAfterContentChecked has been called', emoji: '🔍📦' });
  }
  
  ngAfterViewInit(): void {
       // A callback method that is invoked immediately after Angular has completed initialization of a component's view. It is invoked only once when the view is instantiated.
    this.pushEvent({ message: 'ngAfterViewInit has been called', emoji: '🖼️' });
  }
  
  ngAfterViewChecked(): void {
       // A callback method that is invoked immediately after the default change detector has completed one change-check cycle for a component's view.
    this.pushEvent({ message: 'ngAfterViewChecked has been called', emoji: '🔍🖼️' });
  }
  
  ngOnDestroy(): void {
      // A callback method that performs custom clean-up, invoked immediately before a directive, pipe, or service instance is destroyed.
    this.pushEvent({ message: 'ngOnDestroy has been called', emoji: '💥' });
  }
  
  pushEvent(event: { message: string; emoji: string }): void {
    this.lifecycleEvents.push(event);
  }  
}