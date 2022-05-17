import { TestBed } from '@angular/core/testing';

import { ApiHttpService } from './api-http.service';
import {HttpClientModule} from "@angular/common/http";

describe('ApiHttpService', () => {
  let service: ApiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ApiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
