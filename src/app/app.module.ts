import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle_hooks.component';
import { TemplateSyntax } from './components/template-syntax/template_syntax.component';
import { ConvertPipe } from './pipes/convert/convert.pipe';
import { PipesExampleComponent } from './components/pipeExample/pipe-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './components/communication/parent/parent.component';
import { ChildComponent } from './components/communication/child/child.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './components/forms/forms.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AuthHttpInterceptor } from './components/auth/auth-interceptor.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { GlobalErrorHandler } from './utilities/globalErrorHandler';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateSyntax,
    LifecycleHooksComponent,
    PipesExampleComponent,
    ConvertPipe,
    NotFoundComponent, 
    ParentComponent,
    ChildComponent,
    FormsComponent,
    SignInComponent,
    UnauthorizedComponent,
    ProtectedComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide:HTTP_INTERCEPTORS, useClass:AuthHttpInterceptor, multi:true
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
