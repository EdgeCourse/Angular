import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

tasks = [
    { id: 1, title: 'Learn Services and DI'},
    { id: 2, title: 'Learn HTTP Service'},
    { id: 3, title: 'Learn Pipes'},
    { id: 4, title: 'Learn Routing'}
    ]
  constructor() { }
  
  getTasks() {
    return this.tasks;
  }
}

/*
 Make a service available to the dependency injection system before Angular can inject it into any component by registering a provider. A provider is something that can produce or deliver a service. For this situation, it instantiates the TasksService class to provide the service.

By default, the Angular CLI command ng creates service registers a provider with the root injector for your service by including provider metadata, that is providedIn: ‘root’ in the @Injectable() decorator.

The @Injectable() decorator acknowledges a metadata object for the service, a similar way the @Component() decorator accomplished for your component classes.

At the point when you provide the service at the root level, Angular makes a solitary, shared instance of TasksService and injects into any class that requests it. Enlisting the supplier in the @Injectable metadata additionally permits Angular to streamline an application by evacuating the service in the event that it turns out not to be utilized.

*/

