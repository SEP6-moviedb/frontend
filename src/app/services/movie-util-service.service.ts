import { Injectable } from '@angular/core';
import {tmdbMovie} from "../models/movie-star.model";

@Injectable({
  providedIn: 'root'
})
export class MovieUtilService {

  constructor() { }

  public sanitizeMovies(movies: tmdbMovie[]): tmdbMovie[]{
    movies.forEach(movie => {
      movie.backdrop_path = 'https://image.tmdb.org/t/p/w400' + movie.backdrop_path;
      movie.poster_path = 'https://image.tmdb.org/t/p/w400' + movie.poster_path;
      if (movie.title == undefined)
        movie.title = movie.name;
      return movie;
    });
    return movies;
  }

}
