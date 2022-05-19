import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {comment, Movie} from '../models/movie-star.model';
import { StatisticsByActor, StatisticsByMovie } from '../models/statistics.model';

const baseUrl = 'https://moviestarapi20220420144830.azurewebsites.net/';
@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

  rateMovie(rating: any) {
    let apiUrl = baseUrl + `userratings?movieid=${rating.movieId}&rating=${rating.rating}&userid=${rating.userId}`;
    return this.http.post(apiUrl, "");
  }

  getCommunityAverage(movieId: any): Observable<any> {
    let apiUrl = baseUrl + `userratings?movieid=${movieId}`;
    return this.http.get<any>(apiUrl);
  }

  getAll(): Observable<Movie[]> {
    let apiUrl = baseUrl + `WeatherForecast`;
    return this.http.get<Movie[]>(apiUrl);
  }

  getComments(movieId: any): Observable<comment[]> {
    let apiUrl = baseUrl + `usercomments?movieid=${movieId}`;
    return this.http.get<comment[]>(apiUrl);
  }

  postComment(movieId: any, userName: any, comment: string) {
    let apiUrl = baseUrl + `usercomments?movieid=${movieId}&comment=${comment}&username=${userName}`;
    return this.http.post(apiUrl, "");
  }

  get(id: any): Observable<Movie> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${baseUrl}?title=${title}`);
  }

  getActorStatistics(): Observable<StatisticsByActor[]> {
    let apiUrl = `${baseUrl}/actorstatistics`;
    //let apiUrl = "https://localhost:7183/" + `actorstatistics`;
    let obs = this.http.get<StatisticsByActor[]>(apiUrl);
    obs.subscribe(res => {
      //console.log(res);
      return res
    });
    return obs;
  }

  getMovieStatistics(): Observable<StatisticsByMovie[]> {
    let apiUrl = `${baseUrl}/moviestatistics`;
    //let apiUrl = "https://localhost:7183/" + `moviestatistics`;
    let obs = this.http.get<StatisticsByMovie[]>(apiUrl);
    obs.subscribe(res => {
      //console.log(res);
      return res
    });
    return obs;
  }

}
