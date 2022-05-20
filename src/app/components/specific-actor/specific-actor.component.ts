import { Component, OnInit } from '@angular/core';
import {actors, searchActor} from "../../models/movie-star.model";
import {TmdbService} from "../../services/tmdb.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MovieUtilService} from "../../services/movie-util-service.service";


@Component({
  selector: 'app-specific-actor',
  templateUrl: './specific-actor.component.html',
  styleUrls: ['./specific-actor.component.css']
})
export class SpecificActorComponent implements OnInit {
  responsiveOptions: any;
  actor: actors = new actors;
  private routeSub!: Subscription;
  actors: searchActor[] = [];

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService, private util: MovieUtilService) {
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


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.getActor(params['Id']);
    });

  }

  async getActor(id: string) {

    this.tmdbService.people(id).subscribe(res => {
      let people: searchActor[] = res.results;
      this.actors = this.util.sanitizePeople(people);
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  async getPopularActors() {
    this.actors = await this.tmdbService.getPopularActors()
  }


}
