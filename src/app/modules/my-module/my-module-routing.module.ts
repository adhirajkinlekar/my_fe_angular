import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProWrestlingComponent } from './entertainment/pro-wrestling/pro-wrestling.component';
import { MetalMusicComponent } from './entertainment/metal-music/metal-music.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

const routes: Routes = [
  {
    path: 'entertainment', component:EntertainmentComponent, data :{ id: 'my_secret_id' }, // Data can be passed via route as well
    children: [
      { path: 'pro_wrestling', component: ProWrestlingComponent },
      { path: "metal_music", component:MetalMusicComponent },
    ]
  },
  { path: 'work', component: SoftwareDevelopmentComponent, data :{ type: 'work' } }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }
 