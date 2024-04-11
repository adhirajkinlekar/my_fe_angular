import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiComponent } from './di/di.component';

const routes: Routes = [
    { path: '', component: DiComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
 