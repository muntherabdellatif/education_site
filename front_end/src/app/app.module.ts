import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableCardModule } from './table-card/table-card.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RoadComponent } from './road/road.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SearchPagesModule } from './search_pages/search-pages.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RoadComponent,
    HomeComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    TableCardModule,
    SearchPagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
