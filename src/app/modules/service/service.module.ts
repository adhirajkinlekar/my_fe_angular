import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleService } from './module.service';
import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
  providers:[ModuleService],
  declarations: [],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
