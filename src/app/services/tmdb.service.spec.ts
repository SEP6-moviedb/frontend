import { TestBed } from '@angular/core/testing';

import { TmdbService } from './tmdb.service';
import {HttpClientModule} from "@angular/common/http";

describe('TmdbService', () => {
  let service: TmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(TmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
