import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModuleRoutingModule } from './routing-routing.module';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { ProWrestlingComponent } from './entertainment/pro-wrestling/pro-wrestling.component';
import { MetalMusicComponent } from './entertainment/metal-music/metal-music.component';


@NgModule({
  declarations: [
    EntertainmentComponent,
    SoftwareDevelopmentComponent,
    ProWrestlingComponent,
    MetalMusicComponent
  ],
  imports: [
    CommonModule,
    MyModuleRoutingModule
  ]
})

export class RoutingModule { }
