import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service'
import { tmdbMovie } from '../models/movie-star.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  retdata: any;
  modelType = 'movie';
  sliderContainer: any = [];
  movieContainer: tmdbMovie[];
  constructor(private tmdbService: TmdbService) {
    this.movieContainer = new Array<tmdbMovie>();
  }

  ngOnInit(): void {
    //this.getSomething();
    this.initMovieContainer();
  }

  getSomething() {
    this.tmdbService.getTrendingList("action").subscribe({
      next: (data) => {
        this.retdata = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
    return this.retdata;
  }

  initializeSliderContainer() {
    this.tmdbService.getTrendingList(this.modelType).subscribe(trendingMovies => {
      trendingMovies.results.forEach((trendingMovie: { id: any; title: any; backdrop_path: string; poster_path: string; }) => {
        this.sliderContainer.push({
          id: trendingMovie.id,
          title: trendingMovie.title,
          image: ('http://image.tmdb.org/t/p/original/' + trendingMovie.backdrop_path),
          posterPath: ('http://image.tmdb.org/t/p/original/' + trendingMovie.poster_path),
          modelItem: trendingMovie
        });
      });
    });
  }

  initMovieContainer() {
    this.tmdbService.getTrendingList("movies").subscribe(trending => {
      trending.results.forEach((movie: tmdbMovie) => {
        movie.backdrop_path = 'http://image.tmdb.org/t/p/original/' + movie.backdrop_path;
        movie.poster_path = 'http://image.tmdb.org/t/p/original/' + movie.poster_path;
        this.movieContainer.push(movie);
      });
    });
  }

}
