import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {HttpClientModule} from "@angular/common/http";
import {tmdbMovie} from "../../models/movie-star.model";
import {TmdbService} from "../../services/tmdb.service";

class TmdbServiceMock {
  private data: tmdbMovie[] = [];

  searchMovie(term: string) {
    let movies: tmdbMovie[] = []
    let movie = new tmdbMovie()
    movie.name = "Bob The Builder"
    movie.backdrop_path = "/bob-movies.com"
    movie.poster_path = "/bob-poster.com"
    movies[0] = movie;
    let movie1 = new tmdbMovie()
    movie1.title = "Batman"
    movie1.backdrop_path = "/batman-movies.com"
    movie1.poster_path = "/batman-poster.com"
    movies[1] = movie1;
    this.data = movies;
    return this;
  }

  then(callback: any) {
    callback(this.data);
  }
}
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let tmdbServiceMock = new TmdbServiceMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],

      declarations: [ SearchComponent ],
      providers: [{
        provide: TmdbService, useValue: tmdbServiceMock
      }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get search for movies',  () => {
    // Arrange

    // Act
    component.searchMovie("pirate")

    // TODO: Make this work properly, maybe after fixing search.
    // Assert
    /*
    expect(component.results[0].title).toEqual("Super cool action movie")
    expect(component.results[0].poster_path).toEqual("https://image.tmdb.org/t/p/w400/action-poster.com");
    expect(component.results[0].genre).toEqual("Action")*/
  })
});
