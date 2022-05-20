import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";
import {Location} from '@angular/common';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //socialUser!: SocialUser;
  private emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  errorText: string | null = null;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private location: Location,
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit(): void {
    /*
    this.socialAuthService.authState.subscribe(user => {
      this.socialUser = user;
      console.log(this.socialUser);
    });
    console.log(this.socialAuthService)*/
  }

  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get f() { return this.loginForm.controls; }

  login(): void {
    let username = this.f['username'].value
    let password = this.f['password'].value
    this.authenticationService.login(username, password).subscribe(r => {
      if (r.status === 200)
        this.router.navigateByUrl("/").then(() => window.location.reload());
      else
        this.errorText = "Couldn't log you in with those credentials, please try again."
    });
  }

  /*
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  */
}
