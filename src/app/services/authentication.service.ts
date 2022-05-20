import { Injectable } from '@angular/core';
import { catchError, Observable, NEVER, throwError, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://moviestarapi20220420144830.azurewebsites.net/';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  handleLoginRequestErrors(obs: Observable<any>): Observable<any>{
    return obs.pipe(catchError(err => {
        if (!!err.status && err.status === 401){
          localStorage.removeItem("email");
          return NEVER;
        }
        return throwError(err);
      }),
      map(res => {
        if (res.status === 200) {
          localStorage.setItem("token", "my-super-secret-token-from-server");
          localStorage.setItem("username", res.body.toString());
        }
        return res;
      }));
  }

  login(username: string, password: string): Observable<any> {
    let apiUrl = baseUrl + `users?action=signin`;
    localStorage.setItem("email", username);
    return this.handleLoginRequestErrors(this.http.post<any>(apiUrl,
      {username: username, password: password},
      {observe: "response"}));
  }

  signup(displayname: string, username: string, password: string): Observable<any> {
    let apiUrl = baseUrl + `users`;
    return this.http.post<any>(apiUrl,
      {displayname: displayname, username: username, password: password},
      {observe: "response"});
  }

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }

  getCurrentUser(): string | null{
    return localStorage.getItem("username");
  }

  getCurrentEmail(): string | null{
    return localStorage.getItem("email");
  }
}
