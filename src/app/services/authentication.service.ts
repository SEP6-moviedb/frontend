import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

const baseUrl = 'https://moviestarapi20220420144830.azurewebsites.net/';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let apiUrl = baseUrl + `users?username=${username}&password=${password}`;
    let obs = this.http.get<any>(apiUrl, {observe: "response"});
    obs.subscribe(res => {
      if (res.status === 200) {
        localStorage.setItem("token", "my-super-secret-token-from-server");
        localStorage.setItem("username", res.body.toString());
      }
      return res;
    });
    return obs;
  }

  signup(displayname: string, username: string, password: string): Observable<any> {
    let apiUrl = baseUrl + `users?username=${username}&password=${password}&displayname=${displayname}`;
    return this.http.post<any>(apiUrl, {observe: "response"});
  }

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }

  getCurrentUser(): string | null{
    return localStorage.getItem("username");
  }
}
