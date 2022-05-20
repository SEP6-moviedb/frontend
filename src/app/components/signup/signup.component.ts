import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  errorText: string | null = null;

  signupForm = new FormGroup({
    displayname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get displaynameControl(): FormControl {
    return this.signupForm.get('displayname') as FormControl;
  }

  get usernameControl(): FormControl {
    return this.signupForm.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }

  get f() { return this.signupForm.controls; }

  signup(): void {
    let displayname = this.f['displayname'].value
    let username = this.f['username'].value
    let password = this.f['password'].value
    this.authenticationService.signup(displayname, username, password).subscribe(r => {
      if (r.status === 201)
        this.router.navigateByUrl("/login");
      else
        this.errorText = 'There was an error when creating your account, please try again.'
    });
  }
}
