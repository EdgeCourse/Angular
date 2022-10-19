import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service.ts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = []
    constructor(private tasksServiceInstance: TasksService) { }


  ngOnInit(): void {
	   this.tasks = this.tasksServiceInstance.getTasks();
  }
}

/*
ngOnInit method is the safest place for using our service to get data because; this method is executed when Angular creates this component. More deeply, when It's executed ones; all component related properties are initialized so that's why it is the safest place for assigning returning service values to components properties. But in order to use TasksService in the ngOnInit method, we need to access it first.

Angular will automatically recognize constructor property and create a TasksService instance for us. We call it “serviceInstance” above.

Angular has its own dependency injection pattern for handling the creation of instances of classes that we need in our application. As we need any kind of service in our specific component we can simply add a property of that service to our constructor. 

*/