import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';
import {HttpClientModule} from "@angular/common/http";
import {Carousel, CarouselModule} from "primeng/carousel";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SliderComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
