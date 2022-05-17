import { Component, OnInit } from '@angular/core';
import { Statistics } from '../../models/statistics.model';
import { ApiHttpService } from 'src/app/services/api-http.service'
import { AuthenticationService } from '../../services/authentication.service';
import { Subscription } from "rxjs";
import { ActivatedRoute } from '@angular/router';

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
  }

  setStatistics() {
    this.apiHttpService.getStatistics().subscribe(x => {
      if (x !== undefined)
        console.log(x + " <--- setStatistics in statistics.component qqq");
        console.log(x.avgMovieRatingsByActor + " <--- setStatistics in statistics.component qqq");
        //this.statistics = x
    })
  }
}
