import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { HomeComponent } from './home.component';
import { AboutComponent, AboutContainerComponent, AboutItemComponent } from './about.component';
import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, AboutContainerComponent, AboutItemComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
