import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GpaComponent } from './components/gpa/gpa.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router'

const appRoutes :Routes= [
  {path:'',component:HomeComponent},
  {path:'gpa',component:GpaComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GpaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
