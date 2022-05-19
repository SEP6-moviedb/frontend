import { TestBed } from '@angular/core/testing';

import { MovieUtilService } from './movie-util-service.service';

describe('MovieUtilService', () => {
  let service: MovieUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
