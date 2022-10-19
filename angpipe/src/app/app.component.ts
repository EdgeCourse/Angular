import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-wed-pipe';
  salary = 1023.10293
  birthday: Date = new Date(1993, 9, 31);
  pets: Object[]=[{type:"Turtle", favorite: true },   
  {type:"Cat", favorite: false }, 
  {type:"Rabbit", favorite: true },   
  {type:"Dog", favorite: false }, 
  {type:"Bird", favorite: false }]
}
