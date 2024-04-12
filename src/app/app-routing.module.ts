import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle_hooks.component';
import { TemplateSyntax } from './components/template-syntax/template_syntax.component';
import { PipesExampleComponent } from './components/pipeExample/pipe-example.component';
import { ParentComponent } from './components/communication/parent/parent.component';
import { FormsComponent } from './components/forms/forms.component';

 
const routes: Routes = [
  { path:"",  component:HomeComponent },
  { path:"template_syntax",  component: TemplateSyntax }, 
  { path:"lifecycle_hooks",  component: LifecycleHooksComponent },
  { path:"pipes",  component: PipesExampleComponent },
  { path:"communication",  component: ParentComponent },
  { path:"forms",  component: FormsComponent },
  // Lazy loading in Angular is a technique used to improve the performance of your application by loading modules only when they are needed. 
  // Instead of loading all modules at once when the application starts, Angular loads modules asynchronously as the user navigates through the application. 
  // This helps reduce the initial bundle size and speeds up the application startup time.
  
  { path:"routing", loadChildren: () => import('./modules/routing/routing.module').then(m => m.RoutingModule)},
  { path:"services", loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule)},
  { path: "**" , component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'ignore', 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { } 