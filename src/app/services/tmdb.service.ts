import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {popularActor, tmdbMovie} from '../models/movie-star.model';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = environment.tmdbApiKey;

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  searchMovie(term: string): Observable<any>{
    let searchUrl = baseUrl + `search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${term}`;
    return this.http.get<any>(searchUrl);
  }

  searchPeople(term: string): Observable<any>{
    let searchUrl = baseUrl + `search/person?api_key=${apiKey}&language=en-US&query=${term}&page=1&include_adult=false`;
    return this.http.get<any>(searchUrl);
  }

  getMovieCredits(tmdbId: string): Observable<any>{
    let searchUrl = baseUrl + `movie/${tmdbId}/credits?api_key=${apiKey}&language-en-US`;
    return this.http.get<any>(searchUrl);
  }

  getRecommendationByGenre(genre: string): Observable<any> {
    const requestUrl = baseUrl + `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`;
    return this.http.get(requestUrl);
  }

  getTrendingMovies(): Observable<any> {
    const requestUrl = baseUrl + `trending/movie/day?api_key=${apiKey}&language=en-US`;
    return this.http.get(requestUrl);
  }

  getMovieByTmdbId(tmdbId: string) {
    let findIdUrl = baseUrl + `movie/${tmdbId}/external_ids?api_key=${apiKey}`;
    return this.http.get<any>(findIdUrl)
      .toPromise()
      .then(res =>{
        let movieId = res.imdb_id;
        let apiUrl = baseUrl + `find/${movieId}?api_key=${apiKey}&language=en-US&external_source=imdb_id`;
        return this.http.get<any>(apiUrl).toPromise().then(res => <tmdbMovie>res.movie_results[0])
      })
      .then(data => { return data; });
  }

  getPopularActors() {
    let apiUrl = baseUrl + `person/popular?api_key=${apiKey}&language=en-US&page=1`;
    return this.http.get<any>(apiUrl)
      .toPromise()
      .then(res => <popularActor[]>res.results)
      .then(data => {
        return data;
      });
  }

}
