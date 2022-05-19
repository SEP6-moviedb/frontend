import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service'
import { tmdbMovie } from '../../models/movie-star.model';
import {MovieUtilService} from "../../services/movie-util-service.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})

export class SliderComponent implements OnInit {
  responsiveOptions: any;
  movies: tmdbMovie[] = [];

  genre!: string;
  @Input() genreId = '';

  constructor(private tmdbService: TmdbService,  private util: MovieUtilService) {
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
    if (this.genreId === '0')
      this.getTrendingMovies();
    else
      this.getMovieByGenre(this.genreId);
  }

  getTrendingMovies() {
    this.tmdbService.getTrendingMovies().then(movies => {
      this.movies = this.util.sanitizeMovies(movies);
      this.genre = "Trending"
    });
  }

  getMovieByGenre(genre: string) {
    this.tmdbService.getRecommendationByGenre(genre).then(movies => {
      this.movies = this.util.sanitizeMovies(movies);
      // TODO: Rest of genres according to this list: https://www.themoviedb.org/talk/5daf6eb0ae36680011d7e6ee?language=da-DK
      // DON'T COVER ALL, NOT NECESSARY
      switch (genre) {
        case "28":
          this.genre = "Action";
          break;
        case "16":
          this.genre = "Animation"
          break;
        default:
          this.genre = "Unknown"
          break;
      }
    });
  }

}
