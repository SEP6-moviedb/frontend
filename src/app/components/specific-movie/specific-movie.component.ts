import {Component, OnDestroy, OnInit} from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service'
import { ApiHttpService } from 'src/app/services/api-http.service'
import {comment, Credits, tmdbMovie} from '../../models/movie-star.model';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {MovieUtilService} from "../../services/movie-util-service.service";

@Component({
  selector: 'app-specific-movie',
  templateUrl: './specific-movie.component.html',
  styleUrls: ['./specific-movie.component.css']
})
export class SpecificMovieComponent implements OnInit, OnDestroy {
  credits!: Credits;
  movie: tmdbMovie = new tmdbMovie();
  comments: comment[] = [];
  ratingCtrl = new FormControl(null, Validators.required);
  private routeSub!: Subscription;
  communityRating: number = 0;
  commentForm = this.formBuilder.group({
    comment: ''
  });

  constructor(private tmdbService: TmdbService,
              private apiHttpService: ApiHttpService,
              private authService: AuthenticationService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private util: MovieUtilService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.getMovieById(params['tmdbId']);
      this.setAverageRating(params['tmdbId']);
      this.getComments(params['tmdbId']);
      this.getCredits(params['tmdbId']);
    });
  }
  rateChanged(event: number){
    if (event === 0)
      return;
    let rate = {movieId: this.movie.id, rating: event, userId: this.authService.getCurrentUser()}
    this.apiHttpService.rateMovie(rate).subscribe(() => {
      window.location.reload();
    });
  }

  setAverageRating(id: string){
    this.apiHttpService.getCommunityAverage(id).subscribe(x => {
      if (x[0] !== undefined)
        this.communityRating = x[0].userRatingAvg
    })
  }

  getMovieById(id: string){
    this.tmdbService.getMovieByTmdbId(id).then(movie => {
      console.log(movie + "qqqqqqqqqq");
      if (movie === undefined)
        return;
      this.movie = this.util.sanitizeMovies([movie])[0];
      this.movie.stars = movie.vote_average / 2;
    })
  }

  getComments(id: string){
    this.apiHttpService.getComments(id).subscribe(comments => {
      comments.forEach(c => {
        if (c.comment !== null)
          this.comments.push(c);
      })
    })
  }

  getCredits(id: string){
    this.tmdbService.getMovieCredits(id).subscribe(credits => {
      if (credits === undefined)
        return;
      this.util.sanitizeCredits(credits as Credits);
      this.credits = credits;
    })
  }

  comment(){
    this.apiHttpService.postComment(this.movie.id, this.authService.getCurrentUser(), this.commentForm.value.comment)
      .subscribe(() => {
        window.location.reload();
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
