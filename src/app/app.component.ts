import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'MovieStar';
  isLoggedIn = false;
  username: string | null = null;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isUserLoggedIn()
    this.username = this.authService.getCurrentUser();
  }

  logout(): void {
    this.isLoggedIn = false;
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
