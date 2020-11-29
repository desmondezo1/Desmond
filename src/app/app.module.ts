import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {appRoutes} from '../routes'
import { RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { WebPortfolioComponent } from './portfolio/web-portfolio/web-portfolio.component';
import { DesignPortfolioComponent } from './portfolio/design-portfolio/design-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadScreenComponent,
    PortfolioComponent,
    AboutmeComponent,
    HomeComponent,
    NavComponent,
    WebPortfolioComponent,
    DesignPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
