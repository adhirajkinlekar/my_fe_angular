import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModuleRoutingModule } from './routing-routing.module';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component'; 

@NgModule({
  declarations: [
    EntertainmentComponent,
    SoftwareDevelopmentComponent 
  ],
  imports: [
    CommonModule,
    MyModuleRoutingModule
  ]
})

export class RoutingModule { }
