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
  movies: Array<any> = [];

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
    this.tmdbService.getTrendingMovies().subscribe(res => {
        let movies: tmdbMovie[] = res.results;
        this.movies = this.util.sanitizeMovies(movies);
        this.genre = "Trending ⏫"
      }
    );
  }

  getMovieByGenre(genre: string) {
    this.tmdbService.getRecommendationByGenre(genre).subscribe(res => {
      let movies: tmdbMovie[] = res.results;
      this.movies = this.util.sanitizeMovies(movies);
      switch (genre) {
        case "28":
          this.genre = "Action";
          break;
        case "12":
          this.genre = "Adventure"
          break;
        case "16":
          this.genre = "Animation"
          break;
        case "35":
          this.genre = "Comedy"
          break;
        case "14":
          this.genre = "Fantasy"
          break;
        default:
          this.genre = "Unknown"
          break;
      }
    });
  }

}
