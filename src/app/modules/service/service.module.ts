import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleService } from './module.service';
import { ServiceRoutingModule } from './service-routing.module';
import { HttpComponent } from './http/http.component';
import { DiComponent } from './di/di.component';

@NgModule({
  providers:[ModuleService],
  declarations: [
    DiComponent, // DiComponent needs to be declared here because it uses 'app-http' component
    HttpComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
