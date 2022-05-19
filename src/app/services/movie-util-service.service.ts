import { Injectable } from '@angular/core';
import {Credits, tmdbMovie} from "../models/movie-star.model";

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

  public sanitizeCredits(credits: Credits): Credits{
    credits.cast = credits.cast.slice(0, 10).sort((a, b) => b.popularity - a.popularity);
    credits.crew = credits.crew.filter(crew => crew.job === "Director");

    credits.crew.forEach(crew => crew.profile_path = 'https://image.tmdb.org/t/p/w200/' + crew.profile_path);
    credits.cast.forEach(cast => cast.profile_path = 'https://image.tmdb.org/t/p/w200/' + cast.profile_path);
    return credits;
  }
}
