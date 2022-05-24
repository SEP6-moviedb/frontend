import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/services/api-http.service'
import { Subscription } from "rxjs";
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {
  popularActorsData?: ChartData<'bar'>
  popularMoviesData?: ChartData<'bar'>

  popularActorsChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Popular Actors',
      },
    }
  };

  popularMoviesChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Popular Movies',
      },
    }
  };

  constructor(private apiHttpService: ApiHttpService) { }

  ngOnInit(): void {
    this.setActorStatistics();
    this.setMovieStatistics();
  }

  setActorStatistics() {
    this.apiHttpService.getActorStatistics().subscribe(x => {
      let actorLabels: string[] = [];
      let actorVoteAvg: number[] = [];
      let actorPopularity: number[] = [];

      x = x.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)

      for (let i = 0; i < x.length; i++) {
        actorLabels.push(x[i].actorName);
        actorVoteAvg.push(x[i].voteAverage);
        actorPopularity.push(x[i].popularity/10);
      }

      this.popularActorsData = {
        labels: actorLabels,
        datasets: [
          { label: 'Average tmdb rating for movies the actor is known for', data: actorVoteAvg },
          { label: 'Average tmdb popularity for the actor (divided by ten)', data: actorPopularity }
        ],
      };
    })
  }

  setMovieStatistics() {
    this.apiHttpService.getMovieStatistics().subscribe(x => {
      let movieLabels: string[] = [];
      let movieUserRatingAvg: number[] = [];
      let movieTmdbRatingAvg: number[] = [];

      x = x.sort((a, b) => (a.movieUserRatingAvg < b.movieUserRatingAvg) ? 1 : -1)

      for (let i = 0; i < x.length; i++) {
        if (x[i].movieId != null ) {
        movieLabels.push(x[i].movieName);
          movieUserRatingAvg.push(x[i].movieUserRatingAvg);
          movieTmdbRatingAvg.push(x[i].movieTmdbRatingAvg / 2);
      }
      }

      this.popularMoviesData = {
        labels: movieLabels,
        datasets: [
          { label: 'Average movie rating from the MovieStar community', data: movieUserRatingAvg },
          { label: 'Average movie rating from tmdb (divided by two)', data: movieTmdbRatingAvg }
        ],
      };
    })
  }
}
