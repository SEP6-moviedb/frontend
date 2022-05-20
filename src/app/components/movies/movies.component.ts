import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieIds: string[] = ['0', '28', '12', '16', '35', '14'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
