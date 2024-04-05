import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleHooksRoutingModule } from './lifecycle-hooks-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LifecycleHooksRoutingModule
  ]
})
export class LifecycleHooksModule { }
