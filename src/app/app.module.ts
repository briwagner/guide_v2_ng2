import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MoviesService } from './services/movies.service';
import { MoviesComponent } from './movies/movies.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemDataService),
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
