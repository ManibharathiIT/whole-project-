import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularApiComponent } from './angular-api/angular-api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DifficultComponent } from './difficult/difficult.component';
import { ProjectComponent } from './project/project.component';
import { ChildComponent } from './child/child.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TestComponent } from './test/test.component';
import { NgrxComponent } from './ngrx/ngrx.component';

import { reducer } from './store/counter.reducer';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    AngularApiComponent,
    DifficultComponent,
    ProjectComponent,
    ChildComponent,
    TemplateDrivenComponent,
    TestComponent,
    NgrxComponent,
    ReactiveFormComponent,
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
  ],
  providers: [
    provideStore(),
    provideState({name:'counter',reducer:reducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
