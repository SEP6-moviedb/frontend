import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {actors, KnownFor, popularActor, tmdbMovie} from '../models/movie-star.model';

const headers = new HttpHeaders().set('Content-Type', 'application/X-www-form-urlencoded');

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

  getMovieCredits(tmdbId: string): Observable<any>{
    let searchUrl = baseUrl + `movie/${tmdbId}/credits?api_key=${apiKey}&language-en-US`;
    return this.http.get<any>(searchUrl);
  }

  getGenreList(type: string): Observable<any> {
    const requestUrl = baseUrl + `genre/${type}/list?api_key=${apiKey}&language=en-US`;
    return this.http.get(requestUrl);
  }

  getTrendingList(type: string): Observable<any> {
    const requestUrl = baseUrl + `trending/${type}/day?api_key=${apiKey}&language=en-US`;
    return this.http.get(requestUrl);
  }

  getTrendingMovies() {
    let apiUrl = baseUrl + `trending/movie/day?api_key=${apiKey}&language=en-US`;
    return this.http.get<any>(apiUrl)
      .toPromise()
      .then(res => <tmdbMovie[]>res.results)
      .then(data => {
        return data; });
  }

  getRecommendationByGenre(genre: string) {
    let apiUrl = baseUrl + `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`;
    return this.http.get<any>(apiUrl)
      .toPromise()
      .then(res => <tmdbMovie[]>res.results)
      .then(data => { return data; });
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
    let apiUrl = baseUrl + `person/popular?api_key=${apiKey}&language=en-US&page=1&include_adult=false`;
    return this.http.get<any>(apiUrl)
      .toPromise()
      .then(res => <popularActor[]>res.results)
      .then(data => {
        return data;
      });
  }

  getActorById(personId: number){
    let apiUrl = baseUrl + `person/${personId}?api_key=${apiKey}&language=en-US&include_adult=false`
    return this.http.get<any>(apiUrl)
      .toPromise()
      .then(res => <actors>res)
      .then(data => {
        return data;
      });
  }
}
