import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {comment, Movie} from '../models/movie-star.model';
import { Statistics } from '../models/statistics.model';

const baseUrl = 'https://moviestarapi20220420144830.azurewebsites.net/';
@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

  rateMovie(rating: any) {
    console.log(rating)
    let apiUrl = baseUrl + `userratings?movieid=${rating.movieId}&rating=${rating.rating}&userid=${rating.userId}`;
    this.http.post(apiUrl, "").subscribe(res => res);
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
    this.http.post(apiUrl, "").subscribe(res => res);
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



  getStatistics(): Observable<Statistics> {
    let apiUrl = baseUrl + `statistics?`;
    console.log(apiUrl + " <--- apiUrl qqq")
    let statisticsFromApi = this.http.get<Statistics>(apiUrl);
    console.log(statisticsFromApi + " <--- statisticsFromApi qqq")
    return statisticsFromApi;
  }



}
