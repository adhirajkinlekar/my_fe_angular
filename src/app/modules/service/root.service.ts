import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ManagerSubordinateMap } from './service.interface';

// Angular services are injectable classes designed to facilitate the sharing of functionality and the management of application state across multiple components. 
// These services can be registered with various lifetimes, and they enable dependency injection, 
// allowing you to inject dependencies directly via constructors without the need to instantiate the service using the `new` keyword. 
// This approach streamlines code organization and promotes reusability by decoupling components from the implementation details of the services they rely on.

// 1. Root injector: Services provided at the root level are available throughout the application. 
//    You can achieve this by providing the service in the @Injectable() decorator using the providedIn: 'root' option. 
//    Additionally 'platform' can be used used for services that need to be shared across multiple applications in a microfrontend architecture, 
//    where multiple Angular applications coexist within the same platform.
//    and 'any', which provides a separate instance of the service for each module that imports it.

// 2. Component injector: Services provided at the component level are scoped to that component and its children. 
//    You can provide a service in the @Component() decorator using the providers property.

// 3. Module injector: Services provided at the module level are scoped to that module and can be shared across multiple components within that module.
//    You can provide a service in the @NgModule() decorator using the providers property.


// question -

// What happens if you define a service using `@Injectable({ providedIn: 'root' })` and then register it in a specific module or component only?
// - the manually provided instance in the module will override the root-injected instance only within the scope of that component or module and its children.

@Injectable({
  providedIn: 'root'
})

export class RootService {

  rootCounter: number = 0;
  
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<ManagerSubordinateMap[]>('https://localhost:7121/managers/subordinates');
  }

  postData(data: any) {
    return this.http.post<any>("custome_route", data);
  }

  updateData(id: number, data: any) {
    return this.http.put<any>(`api_url/${id}`, data);
  }

  patchData(id: number, data: any) {
    return this.http.patch<any>(`api_url/${id}`, data);
  }

  deleteData(id: number) {
    return this.http.delete<any>(`api_url/${id}`);
  }
}

