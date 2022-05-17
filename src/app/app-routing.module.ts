import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationGuard} from "./authentication-guard.guard";
import {LoginComponent} from "./components/login/login.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {SpecificMovieComponent} from "./components/specific-movie/specific-movie.component";
import {HomeComponent} from "./components/home/home.component";
import {ActorsComponent} from "./components/actors/actors.component";

const routes: Routes = [
  {path: 'movies', component: MoviesComponent, canActivate: [AuthenticationGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'specific-movie/:tmdbId', component: SpecificMovieComponent, canActivate: [AuthenticationGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'actors', component: ActorsComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
