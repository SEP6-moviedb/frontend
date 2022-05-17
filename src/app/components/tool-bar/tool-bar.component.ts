import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-star.model';
import { ApiHttpService } from 'src/app/services/api-http.service'

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  ourOwnCalc: any;
  movies?: Movie[];

  constructor(private apiHttpService: ApiHttpService) {
    this.ourOwnCalc = "4 + 6";
  }

  ngOnInit(): void {
    this.getSomething();
  }

  getSomething(): Movie {
    this.apiHttpService.getAll().subscribe({
      next: (data) => {
        this.movies = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
    return new Movie();
  }
}
