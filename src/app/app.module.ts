import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './partialviews/navbar/defaultnavbar/navbar.component';
import { StusernavbarComponent } from './partialviews/navbar/stusernavbar/stusernavbar.component';
import { CollapsebarComponent } from './partialviews/collapsebar/collapsebar.component';
import { MarketviewComponent } from './partialviews/marketplaceview/marketview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StusernavbarComponent,
    CollapsebarComponent,
    MarketviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
