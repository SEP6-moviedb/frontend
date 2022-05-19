import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service'
import {MovieUtilService} from "../../services/movie-util-service.service";
import {tmdbMovie} from "../../models/movie-star.model";
import * as _ from 'underscore';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public loading: boolean = false;
  public results: Array<any> = []


  constructor(private tmdbService: TmdbService, private util: MovieUtilService) {
    this.searchMovie = _.debounce(this.searchMovie, 1000);
  }

  ngOnInit(): void {  }

  searchMovie(e: any){
    if (e.target.value.length > 2){
      this.loading = true;
      this.tmdbService.searchMovie(e.target.value).subscribe(res => {
          let movies: tmdbMovie[] = res.results;
          this.results = this.util.sanitizeMovies(movies);
        })
    }
    if (e.target.value.length == 0) {
      this.results = [];
      this.loading = false;
    }
  }

}
