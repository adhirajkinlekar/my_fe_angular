import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { ManagerSubordinateMap } from '../service.interface';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrl: './http.component.scss'
})
export class HttpComponent implements OnInit{

  employeeManagerMap: ManagerSubordinateMap[] = [];

  constructor(private rootService:RootService, private moduleService: ModuleService){

    this.moduleService.moduleCounter += 1;

  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.rootService.getData().subscribe({
      next: (employeeManagerMap) => {
        this.employeeManagerMap = employeeManagerMap;
      },
      error: (err) => {
        // Handle error
      }
    });
  }
}
