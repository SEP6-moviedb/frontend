import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificMovieComponent } from './specific-movie.component';

describe('SpecificMovieComponent', () => {
  let component: SpecificMovieComponent;
  let fixture: ComponentFixture<SpecificMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
