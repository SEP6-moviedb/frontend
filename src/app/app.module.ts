import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MoviesComponent } from './components/movies/movies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SliderComponent } from './components/slider/slider.component';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TmdbService } from 'src/app/services/tmdb.service'
import { ApiHttpService } from 'src/app/services/api-http.service';
import { SpecificMovieComponent } from './components/specific-movie/specific-movie.component'
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    PageNotFoundComponent,
    MoviesComponent,
    SliderComponent,
    SpecificMovieComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path: 'movies', component: MoviesComponent},
      {path: 'tool-bar', component: ToolBarComponent},
      {path: 'specific-movie/:tmdbId', component: SpecificMovieComponent},
      {path: '', redirectTo: '/tool-bar', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
    ]),
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule, ReactiveFormsModule
  ],
  providers: [
    ApiHttpService,
    TmdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
