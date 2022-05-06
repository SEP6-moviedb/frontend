import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie-star.model';

const baseUrl = 'https://moviestarapi20220420144830.azurewebsites.net/WeatherForecast';
@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(baseUrl);
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
}
