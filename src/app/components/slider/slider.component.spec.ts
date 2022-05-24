import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderComponent } from './slider.component';
import {HttpClientModule} from "@angular/common/http";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TmdbService} from "../../services/tmdb.service";
import {tmdbMovie} from "../../models/movie-star.model";
import {MovieUtilService} from "../../services/movie-util-service.service";

class TmdbServiceMock{
  private data: tmdbMovie[] = [];

  getTrendingMovies() {
    let movies: tmdbMovie[] = []
    let movie = new tmdbMovie()
    movie.name = "Bob The Builder"
    movie.title = "Bob The Builder"
    movie.backdrop_path = "/bob-movies.com"
    movie.poster_path = "/bob-poster.com"
    movies[0] = movie;
    let movie1 = new tmdbMovie()
    movie1.name = "Batman"
    movie1.title = "Batman"
    movie1.backdrop_path = "/batman-movies.com"
    movie1.poster_path = "/batman-poster.com"
    movies[1] = movie1;
    this.data = movies;
    return this;
  }

  getRecommendationByGenre(genre: string){
    let movie = new tmdbMovie()
    movie.name = "Super cool action movie"
    movie.title = "Super cool action movie"
    movie.backdrop_path = "/action-movies.com"
    movie.poster_path = "/action-poster.com"
    this.data = [movie];
    return this;
  }

  subscribe(callback: any) {
    callback(this.data);
  }
}

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;
  let tmdbServiceMock = new TmdbServiceMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SliderComponent ],
      providers: [{
        provide: TmdbService, useValue: tmdbServiceMock
      }, MovieUtilService],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should get trending movies', async () => {
    // Arrange
    component.genreId = '0';

    // Act
    await component.ngOnInit();

    // Assert
    expect(component.movies[0].title).toEqual("Bob The Builder");
    expect(component.movies[1].backdrop_path).toEqual("https://image.tmdb.org/t/p/w400/batman-movies.com");
    expect(component.genre).toEqual("Trending ⏫");
  })

  xit('should get specific genre movies', async () => {
    // Arrange
    component.genreId = "28"

    // Act
    await component.ngOnInit()

    // Assert
    expect(component.movies[0].title).toEqual("Super cool action movie");
    expect(component.movies[0].poster_path).toEqual("https://image.tmdb.org/t/p/w400/action-poster.com");
    expect(component.genre).toEqual("Action")
    //expect(component.getMovieByGenre).toHaveBeenCalledWith("28")
  })

});
