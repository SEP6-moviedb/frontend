import { Component, OnInit } from '@angular/core';
import {popularActor} from "../../models/movie-star.model";
import {TmdbService} from "../../services/tmdb.service";

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actorContainer: popularActor[];

  constructor(private tmdbService: TmdbService
  )
    {
      this.actorContainer = new Array<popularActor>();
    }

  ngOnInit(): void {
    this.initActorContainer()
  }

  initActorContainer() {
    this.tmdbService.getTrendingList("movies").subscribe(trending => {
      trending.results.forEach((actor: popularActor) => {
        this.actorContainer.push(actor);
      });
    });
  }
}
