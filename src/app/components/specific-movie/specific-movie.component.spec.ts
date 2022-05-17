import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificMovieComponent } from './specific-movie.component';
import {AuthenticationService} from "../../services/authentication.service";
import {TmdbService} from "../../services/tmdb.service";
import {ApiHttpService} from "../../services/api-http.service";
import {HttpClientModule} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('SpecificMovieComponent', () => {
  let component: SpecificMovieComponent;
  let fixture: ComponentFixture<SpecificMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ SpecificMovieComponent ],
      providers: [ TmdbService, ApiHttpService, AuthenticationService, FormBuilder],
      schemas: [NO_ERRORS_SCHEMA],
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
