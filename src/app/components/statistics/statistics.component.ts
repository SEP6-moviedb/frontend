import { Component, OnInit } from '@angular/core';
import { StatisticsByActor } from '../../models/statistics.model';
import { ApiHttpService } from 'src/app/services/api-http.service'
import { AuthenticationService } from '../../services/authentication.service';
import { Subscription } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
//import * as CanvasJS from './canvasjs.min';

declare const CanvasJS: any;
declare const ChartData: any;
declare const ChartOptions: any;


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {

  private routeSub!: Subscription;
  statisticsByActor: StatisticsByActor[]= []
  salesData?: ChartData<'bar'> 

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Popular Actors',
      },
    }
  };

  constructor(private apiHttpService: ApiHttpService,
    private authService: AuthenticationService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setStatistics();
  }

  setStatistics() {
    this.apiHttpService.getStatistics().subscribe(x => {
      let actorLabels: string[] = [];
      let actorVoteAvg: number[] = [];
      let actorPopularity: number[] = [];

      x = x.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)

      for (var i = 0; i < x.length; i++) {
        actorLabels.push(x[i].actorName);
        actorVoteAvg.push(x[i].voteAverage);
        actorPopularity.push(x[i].popularity/10);
      }

      this.salesData = {
        labels: actorLabels,
        datasets: [
          { label: 'Average vote from tmdb', data: actorVoteAvg },
          { label: 'Average popularity from tmdb (divided by ten)', data: actorPopularity }
        ],
      };

      this.statisticsByActor = x;
    })
  }
}
