import { Component, OnInit } from '@angular/core';
import { Statistics } from '../../models/statistics.model';
import { ApiHttpService } from 'src/app/services/api-http.service'
import { AuthenticationService } from '../../services/authentication.service';
import { Subscription } from "rxjs";
import { ActivatedRoute } from '@angular/router';
//import * as CanvasJS from './canvasjs.min';

declare const CanvasJS: any;


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  hero = 'Windstorm';
  private routeSub!: Subscription;
  statistics: Statistics = new Statistics();

  constructor(private apiHttpService: ApiHttpService,
    private authService: AuthenticationService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.setStatistics();
    });


    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });

    chart.render();
  }

  setStatistics() {
    this.apiHttpService.getStatistics().subscribe(x => {
      if (x !== undefined)
        console.log(x + " <--- setStatistics in statistics.component qqq");
      if (x.avgMovieRatingsByActor !== undefined) {
        console.log(x.avgMovieRatingsByActor[1].key + " <--- setStatistics in statistics.component KEY qqq");
        console.log(x.avgMovieRatingsByActor[1].value + " <--- setStatistics in statistics.component VALUE qqq");
      }

        this.statistics = x
    })
  }
}
