import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { tmdbMovie } from '../models/movie-star.model';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = environment.tmdbApiKey;

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  getGenreList(type: string): Observable<any> {
    const requestUrl = baseUrl + `genre/${type}/list?api_key=${apiKey}&language=en-US`;
    return this.http.get(requestUrl);
  }

  getTrendingList(type: string): Observable<any> {
    const requestUrl = baseUrl + `trending/${type}/day?api_key=${apiKey}&language=en-US`;
    return this.http.get(requestUrl);
  }

  getTrendingMovies() {
    let apiUrl = baseUrl + `trending/movies/day?api_key=${apiKey}&language=en-US`;
    return this.http.get<any>(apiUrl)
      .toPromise()
      .then(res => <tmdbMovie[]>res.results)
      .then(data => { return data; });
  }

}