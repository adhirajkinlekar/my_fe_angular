import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, skipWhile } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {

  events: number[] = [];

  constructor(private http:HttpClient) { 
    // (observer is the object that we pass into subscribe and not the subscribe method itself)
    // An Observer is an interface that defines a set of callbacks to handle the notifications (values, errors, and completion signals) emitted by an Observable. It typically consists of three methods:
    // next(value): Handles the next value emitted by the Observable.
    // error(err): Handles any error emitted by the Observable.
    // complete(): Indicates that the Observable has completed emitting values.

  }

  ngOnInit(): void {
 
  }

  subscribeToObservable(){

    this.getObservable().subscribe({
      next: value => this.events.push(value),
      error: err => console.error(err),
      // when you call complete() on an Observable, it signifies the end of emissions, and the Observable is marked as complete. 
      // Subscribers to this Observable will receive the completion notification and automatically unsubscribe.
      complete: () => this.events = []
    })
  }

  getObservable(): Observable<number>{

    return new Observable<number>(subscriber => {
      let count = 1;
      subscriber.next(100);
      const intervalId = setInterval(() => {
        subscriber.next(count);

        // subscriber.error(NEW Error('ERROR'));
        
        if (count === 10) {
          subscriber.complete();
          clearInterval(intervalId); // Stop the interval
        }
        count++;
      }, 1000); // Emit every 2 seconds
    }).pipe(
      skipWhile(x=> x >= 100),
      map(value=> {
        if(isNaN(value)) throw new Error("Please enter a number")
          else return value
      })
    )
}


getPosts(){
  // An observable is the source of events and in this case, `this.http.get` method returns an observable
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(
      map(event => event),
      map(event => event)
    )
  }

// A pipeline in RxJS is constructed using a series of operators. 
// These operators perform various operations, transformations, or computations on the emitted values. 
// In the event of an error, the pipeline is designed to gracefully handle errors. 
// If an error occurs at any point in the pipeline, it will propagate down the chain, and subsequent operators will not be executed. 
// This ensures that errors are appropriately handled,
// preventing the execution of the remaining operators and providing a mechanism for error handling within the RxJS observable pipeline.
}