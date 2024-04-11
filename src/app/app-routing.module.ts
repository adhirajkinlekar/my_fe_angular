import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle_hooks.component';
import { TemplateSyntax } from './components/template-syntax/template_syntax.component';
import { PipesExampleComponent } from './components/pipeExample/pipe-example.component';
import { ParentComponent } from './components/communication/parent/parent.component';

 
const routes: Routes = [
  { path:"",  component:HomeComponent },
  { path:"template_syntax",  component: TemplateSyntax }, 
  { path:"lifecycle_hooks",  component: LifecycleHooksComponent },
  { path:"pipes",  component: PipesExampleComponent },
  { path:"communication",  component: ParentComponent },
  { path: "**" , component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'ignore', 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
