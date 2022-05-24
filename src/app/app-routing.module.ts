import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationGuard} from "./authentication-guard.guard";
import {LoginComponent} from "./components/login/login.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {SpecificMovieComponent} from "./components/specific-movie/specific-movie.component";
import {HomeComponent} from "./components/home/home.component";
import {SpecificActorComponent} from "./components/specific-actor/specific-actor.component";
import {StatisticsComponent} from "./components/statistics/statistics.component";
import {SignupComponent} from "./components/signup/signup.component";
import {FavouritesComponent} from "./components/favourites/favourites.component";
import {KnownforComponent} from "./components/known-for/known-for.component";

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'specific-movie/:tmdbId', component: SpecificMovieComponent, canActivate: [AuthenticationGuard]},
  {path: 'specific-actor/:Id', component: SpecificActorComponent, canActivate: [AuthenticationGuard]},
  {path: 'known-for/:Id', component: KnownforComponent, canActivate: [AuthenticationGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthenticationGuard] },
  { path: 'favourites', component: FavouritesComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
