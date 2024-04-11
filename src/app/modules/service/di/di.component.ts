import { Component } from '@angular/core';
import { RootService } from '../root.service';
import { ModuleService } from '../module.service';
import { ComponentService } from './component.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrl: './di.component.scss',
  providers: [ComponentService]
})
export class DiComponent {

  constructor(public rootService:RootService, public moduleService:ModuleService, public componentService: ComponentService){

    this.rootService.rootCounter += 1;
    this.moduleService.moduleCounter += 1;
    this.componentService.componentCounter += 1;
  }
}
