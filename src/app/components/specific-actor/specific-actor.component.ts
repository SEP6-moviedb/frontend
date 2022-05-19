import { Component, OnInit } from '@angular/core';
import {actors} from "../../models/movie-star.model";
import {TmdbService} from "../../services/tmdb.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-specific-actor',
  templateUrl: './specific-actor.component.html',
  styleUrls: ['./specific-actor.component.css']
})
export class SpecificActorComponent implements OnInit {
  responsiveOptions: any;
  actor: actors = new actors;
  private routeSub!: Subscription;

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {
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

  async getActor(id: number) {

    this.actor = await this.tmdbService.getActorById(id)
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
