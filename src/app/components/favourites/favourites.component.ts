import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from "../../services/api-http.service";
import {TmdbService} from "../../services/tmdb.service";
import {MovieUtilService} from "../../services/movie-util-service.service";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  movies: Array<any>[] = [];

  constructor(private apiHttpService: ApiHttpService,
              private tmdbService: TmdbService,
              private util: MovieUtilService,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getMyFavouriteMovies()
  }

  getMyFavouriteMovies(){
    this.apiHttpService.getFavourites(this.authService.getCurrentEmail()!).subscribe(res => {

    })
  }

}
