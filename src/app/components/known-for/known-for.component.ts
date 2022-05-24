import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {searchActor} from "../../models/movie-star.model";
import {ActivatedRoute} from "@angular/router";
import {TmdbService} from "../../services/tmdb.service";
import {MovieUtilService} from "../../services/movie-util-service.service";

@Component({
  selector: 'app-known-for',
  templateUrl: './known-for.component.html',
  styleUrls: ['./known-for.component.css']
})
export class KnownforComponent implements OnInit {

  responsiveOptions: any;
  private routeSub!: Subscription;
  actors: searchActor = new searchActor();

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
      this.getKnownFor(params['Id']);
    });

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  async getKnownFor(name: string) {
    this.tmdbService.people(name).subscribe(res => {
      this.actors = this.util.sanitizePeople(res.results)[0];
    })
  }
}
