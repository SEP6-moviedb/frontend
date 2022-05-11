import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service'
import { ApiHttpService } from 'src/app/services/api-http.service'
import { tmdbMovie } from '../../models/movie-star.model';
import {FormControl, Validators} from '@angular/forms';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-specific-movie',
  templateUrl: './specific-movie.component.html',
  styleUrls: ['./specific-movie.component.css']
})
export class SpecificMovieComponent implements OnInit {

  movie: tmdbMovie = new tmdbMovie();
  ratingCtrl = new FormControl(null, Validators.required);
  private routeSub!: Subscription;
  communityRating: number = 1;

  constructor(private tmdbService: TmdbService, private apiHttpService: ApiHttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.getMovieById(params['tmdbId']);
    });
  }
  rateChanged(event: number){
    if (event === 0)
      return;
    let rate = {movieId: this.movie.id, rating: event, userId: 3}
    this.apiHttpService.rateMovie(rate);
  }

  getMovieById(id: string){
    this.tmdbService.getMovieByTmdbId(id).then(movie => {
      movie.backdrop_path = 'http://image.tmdb.org/t/p/original/' + movie.backdrop_path;
      movie.poster_path = 'http://image.tmdb.org/t/p/original/' + movie.poster_path;
      if (movie.title == undefined)
        movie.title = movie.name;
      this.movie = movie;
      this.movie.stars = movie.vote_average / 2;
    })
  }

  toggle() {
    if (this.ratingCtrl.disabled) {
      this.ratingCtrl.enable();
    } else {
      this.ratingCtrl.disable();
    }
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
