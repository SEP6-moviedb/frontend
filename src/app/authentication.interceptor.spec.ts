import { TestBed } from '@angular/core/testing';

import { AuthenticationInterceptor } from './authentication.interceptor';
import {RouterTestingModule} from "@angular/router/testing";
import {AuthenticationService} from "./services/authentication.service";
import {HttpClientModule} from "@angular/common/http";

describe('AuthenticationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule],
    providers: [
      AuthenticationInterceptor,
      AuthenticationService
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthenticationInterceptor = TestBed.inject(AuthenticationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
