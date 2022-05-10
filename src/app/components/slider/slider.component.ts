import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service'
import { tmdbMovie } from '../../models/movie-star.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})

export class SliderComponent implements OnInit {
  responsiveOptions: any;
  trendingMovies: tmdbMovie[] = [];
  actionMovies: tmdbMovie[] = [];
  animationMovies: tmdbMovie[] = [];

  constructor(private tmdbService: TmdbService) {
    this.responsiveOptions = [{
        breakpoint: '4096px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }];
  }

  async ngOnInit() {
    this.getMovieByGenre("28");
    this.getMovieByGenre("16");
    this.getTrendingMovies();
  }

  getTrendingMovies() {
    this.tmdbService.getTrendingMovies().then(movies => {
      movies.forEach(movie => {
        movie.backdrop_path = 'http://image.tmdb.org/t/p/original/' + movie.backdrop_path;
        movie.poster_path = 'http://image.tmdb.org/t/p/original/' + movie.poster_path;
        if (movie.title == undefined)
          movie.title = movie.name;
        return movie;
      });
      this.trendingMovies = movies;
    });
  }

  getMovieByGenre(genre: string) {
    this.tmdbService.getRecommendationByGenre(genre).then(movies => {
      movies.forEach(movie => {
        movie.backdrop_path = 'http://image.tmdb.org/t/p/original/' + movie.backdrop_path;
        movie.poster_path = 'http://image.tmdb.org/t/p/original/' + movie.poster_path;
        if (movie.title == undefined)
          movie.title = movie.name;
        return movie;
      });
      switch (genre) {
        case "28":
          this.actionMovies = movies;
          break;
        case "16":
          this.animationMovies = movies
          break;
        default:
          break;
      }
    });
  }

}
