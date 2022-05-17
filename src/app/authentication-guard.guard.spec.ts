import { TestBed } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication-guard.guard';
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./services/authentication.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('AuthenticationGuardGuard', () => {
  let guard: AuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [AuthenticationService]
    });
    guard = TestBed.inject(AuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
