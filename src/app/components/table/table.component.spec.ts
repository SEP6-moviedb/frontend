import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import {HttpClientModule} from "@angular/common/http";

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
