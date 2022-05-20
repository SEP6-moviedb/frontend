import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service'
import { MovieUtilService } from "../../services/movie-util-service.service";
import {searchActor, tmdbMovie} from "../../models/movie-star.model";
import * as _ from 'underscore';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public loading: boolean = false;
  public results: Array<any> = []
  searchType = "movies";

  constructor(private tmdbService: TmdbService, private util: MovieUtilService) {
    this.search = _.debounce(this.search, 1000);
  }

  ngOnInit(): void {  }

  clearResults(): void{
    this.results = [];
  }
  search(e: any){
    if (e.target.value.length > 2) {
      this.loading = true;
      if (this.searchType === "movies"){
        this.tmdbService.searchMovie(e.target.value).subscribe(res => {
          let movies: tmdbMovie[] = res.results;
          this.results = this.util.sanitizeMovies(movies);
        })
      }
      else if (this.searchType === "people") {
        this.tmdbService.searchPeople(e.target.value).subscribe(res => {
          let people: searchActor[] = res.results;
          this.results = this.util.sanitizePeople(people);
        })
      }
    }
    if (e.target.value.length == 0) {
      this.results = [];
      this.loading = false;
    }
  }

}
