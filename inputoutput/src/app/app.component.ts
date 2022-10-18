import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 // initialCount: number = 10;

  //re-assign this.myCount with the event that’s passed back
    myCount: number = 10;
  countChange(event) {
    this.myCount = event;
  }
}
