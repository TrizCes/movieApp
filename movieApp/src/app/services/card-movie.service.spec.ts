import { TestBed } from '@angular/core/testing';

import { CardMovieService } from './card-movie.service';

describe('CardMovieService', () => {
  let service: CardMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
