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
import {AuthenticationInterceptor} from "./authentication.interceptor";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import {environment} from "../environments/environment.prod";
import {AgGridModule} from "ag-grid-angular";
import { SpecificActorComponent } from './components/specific-actor/specific-actor.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NgChartsModule } from 'ng2-charts';
import { SignupComponent } from './components/signup/signup.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import {KnownforComponent} from "./components/known-for/known-for.component";


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    PageNotFoundComponent,
    MoviesComponent,
    SliderComponent,
    SpecificMovieComponent,
    SearchComponent,
    LoginComponent,
    HomeComponent,
    StatisticsComponent,
    SpecificActorComponent,
    SignupComponent,
    FavouritesComponent,
    KnownforComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path: '**', component: PageNotFoundComponent},
    ]),
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AgGridModule,
    NgChartsModule
  ],
  providers: [
    TmdbService,
    AuthenticationInterceptor,
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
