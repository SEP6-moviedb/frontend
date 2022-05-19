import {Component, OnInit} from '@angular/core';
import {TmdbService} from "../../services/tmdb.service";
import {KnownFor, popularActor} from "../../models/movie-star.model";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  responsiveOptions: any;
  actors: popularActor[] = [];


  constructor(private tmdbService: TmdbService) {
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
    this.getPopularActors();

  }

  async getPopularActors() {
    this.actors = await this.tmdbService.getPopularActors()
  }
}

