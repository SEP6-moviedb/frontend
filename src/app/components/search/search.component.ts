import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { tmdbMovie } from '../../models/movie-star.model';
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap
} from 'rxjs/operators';
import { TmdbService } from 'src/app/services/tmdb.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public loading: boolean = false;
  public results!: Observable<any>;
  public searchField!: FormControl;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(4000),
      distinctUntilChanged(),
      tap(_ => {
        this.loading = true;
      }),

      switchMap(term => this.search(term)),

      tap(_ => (this.loading = false))
    );
  }

  search(search: string): Observable<any>{

    this.tmdbService.search(search).then(movies =>{
      movies.forEach(movie => {
        movie.backdrop_path = 'http://image.tmdb.org/t/p/w400' + movie.backdrop_path;
        movie.poster_path = 'http://image.tmdb.org/t/p/w400' + movie.poster_path;
        if (movie.title == undefined)
          movie.title = movie.name;
        return movie;
      });
      console.log(movies)
      this.results = new Observable<any>(obs => obs.next(movies))
    });
    return this.results;
  }
}
