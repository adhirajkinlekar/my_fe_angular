import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle_hooks.component';
import { TemplateSyntax } from './components/template-syntax/template_syntax.component';
import { PipesExampleComponent } from './components/pipeExample/pipe-example.component';
import { ParentComponent } from './components/communication/parent/parent.component';
import { FormsComponent } from './components/forms/forms.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuard } from './components/auth/auth.guard';

 
const routes: Routes = [
  { path:"",  component:HomeComponent },
  { path:"template_syntax",  component: TemplateSyntax }, 
  { path:"lifecycle_hooks",  component: LifecycleHooksComponent },
  { path:"pipes",  component: PipesExampleComponent },
  { path:"communication",  component: ParentComponent },
  { path:"forms",  component: FormsComponent },
  { path:"sign_in", canActivate:[AuthGuard], component: SignInComponent },
  { path:"unauthorized", component: UnauthorizedComponent },
  { path:"protected", canActivate:[AuthGuard], component: ProtectedComponent },
 // canActivate:[AuthGuard],
  // Lazy loading in Angular is a technique used to improve the performance of your application by loading modules only when they are needed. 
  // Instead of loading all modules at once when the application starts, Angular loads modules asynchronously as the user navigates through the application. 
  // This helps reduce the initial bundle size and speeds up the application startup time.
  
  { path:"routing", loadChildren: () => import('./modules/routing/routing.module').then(m => m.RoutingModule)},
  { path:"services", loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule)},
  { path: "**" , component: NotFoundComponent }
  // redirectTo: '/not-found'
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'ignore', 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { } 