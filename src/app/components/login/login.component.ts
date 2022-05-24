import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private emailPattern = "[a-z_A-Z0-9._%+-]+@[a-z_A-Z0-9.-]+\.[a-z_A-Z]{2,4}$";
  errorText: string | null = null;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
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
    this.authenticationService.login(username.toLowerCase(), password).subscribe(r => {
      if (r.status === 200)
        this.router.navigateByUrl("/").then(() => window.location.reload());
      else
        this.errorText = "Couldn't log you in with those credentials, please try again."
    });
  }
}
