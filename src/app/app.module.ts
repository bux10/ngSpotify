import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent} from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
