import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle_hooks.component';
import { TemplateSyntax } from './components/template-syntax/template_syntax.component';
import { ConvertPipe } from './pipes/convert/convert.pipe';
import { PipesExampleComponent } from './components/pipeExample/pipe-example.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/communication/parent/parent.component';
import { ChildComponent } from './components/communication/child/child.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
