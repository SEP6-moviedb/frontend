import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthenticationService} from "../../services/authentication.service";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../../app-routing.module";
import {SocialAuthService, SocialLoginModule} from "@abacritt/angularx-social-login";
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import {Observable} from "rxjs";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let socialAuthServiceMock: SpyObj<SocialAuthService>;

  socialAuthServiceMock = createSpyObj('socialAuthService', ['authState', 'initState', 'refreshAuthToken', 'signIn', 'signOut']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule, SocialLoginModule],
      providers: [AuthenticationService, { provide: SocialAuthService, useValue: {...socialAuthServiceMock, authState: new Observable()} }],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
