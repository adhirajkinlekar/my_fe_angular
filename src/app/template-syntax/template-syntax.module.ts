import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateSyntaxRoutingModule } from './template-syntax-routing.module';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    TemplateSyntaxRoutingModule,
    FormsModule 
  ]
})
export class TemplateSyntaxModule { }
