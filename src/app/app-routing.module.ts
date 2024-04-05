import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

 
const routes: Routes = [
  {
    path:"",  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  
  },

  {
    path:"template_syntax",  loadChildren: () => import('./template-syntax/template-syntax.module').then(m => m.TemplateSyntaxModule) 
  },

  {
    path:"lifecycle_hooks",  loadChildren: () => import('./lifecycle-hooks/lifecycle-hooks.module').then(m => m.LifecycleHooksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'ignore', 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
