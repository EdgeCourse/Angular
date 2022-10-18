import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input()
  count: number = 0;

  /*
  @Input('init')
  count: number = 0;
*/
 
  
//  import Output from angular/core and decorate a new change property here
  //To be able to use our Output, we need to import and bind a new instance of the EventEmitter to it:

//signify the type of event value we are emitting, and our change output is of type EventEmitter. In our case we are emitting a number type
  
//create a change property, and bind a new instance of EventEmitter to it 

//call our this.change method - because it references an instance of EventEmitter, we have to call .emit() to emit an event to the parent  
 
//This will emit a change to our (change) listener we setup in the parent, to which our countChange($event) callback will be invoked, and the data associated with the event will be given to us via the $event property.
 
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
}
