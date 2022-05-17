import { Component, OnInit } from '@angular/core';
import {popularActor, tmdbMovie} from "../../models/movie-star.model";
import {TmdbService} from "../../services/tmdb.service";

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  tableContainer: any = [];
  actorContainer: popularActor[];
  constructor(private tmdbService: TmdbService) {
    this.actorContainer = new Array<popularActor>();
  }

  ngOnInit(): void {
 //   this.initActorContainer();
  }

 // initActorContainer() {
 //   this.tmdbService.getPopularActor().subscribe(trending => {
 //     trending.results.forEach((movie: tmdbMovie) => {
 //       movie.backdrop_path = 'https://image.tmdb.org/t/p/w400' + movie.backdrop_path;
 //       movie.poster_path = 'https://image.tmdb.org/t/p/w400' + movie.poster_path;
 //       this.movieContainer.push(movie);
 //     });
 //   });
 // }
}
