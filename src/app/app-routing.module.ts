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
 import { RxjsComponent } from './components/rxjs/rxjs.component';
import { AuthenticationRoutesGuard } from './components/auth/authenticationRoutesGuard.guard';
import { AuthenticationRequiringRoutesGuard } from './components/auth/authenticationRequiringRoutesGuard.guard';
 

const routes: Routes = [
  { path:"",  component:HomeComponent },
  { path:"template_syntax",  component: TemplateSyntax }, 
  { path:"lifecycle_hooks",  component: LifecycleHooksComponent },
  { path:"pipes",  component: PipesExampleComponent },
  { path:"communication",  component: ParentComponent },
  { path:"forms",  component: FormsComponent },
  { path:"sign_in", canActivate:[AuthenticationRoutesGuard], component: SignInComponent },
  { path:"unauthorized", component: UnauthorizedComponent },
  { path:"rxjs", component: RxjsComponent },
  { path:"protected", canActivate:[AuthenticationRequiringRoutesGuard], component: ProtectedComponent },
 // canActivate:[AuthGuard],
  // Lazy loading in Angular is a technique used to improve the performance of your application by loading modules only when they are needed. 
  // Instead of loading all modules at once when the application starts, Angular loads modules asynchronously as the user navigates through the application. 
  // This helps reduce the initial bundle size and speeds up the application startup time.
  
  { path:"routing", loadChildren: () => import('./modules/routing/routing.module').then(m => m.RoutingModule)},
  { path:"services", loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule)},

  // The wildcard route '**' is typically placed at the end of the routes array as a catch-all route.
  // This is because Angular matches routes in the order in which they are defined, and the wildcard route matches any URL that doesn't match any other routes defined earlier.
  { path: "**" , component: NotFoundComponent }
  // redirectTo: '/not-found'
]; 
// CanLoad: This guard is used to prevent the asynchronous loading of a module until certain conditions are met. It's commonly used to restrict access to feature modules that are lazily loaded. 
// For example, you might want to prevent loading a module if the user is not authenticated or doesn't have certain permissions.

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'ignore', 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { } 