import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./services/authentication.service";

describe('AppComponent', () => {
  beforeEach(async () => {
    let store:any = { };

    const mockLocalStorage = {
      removeItem: (key: string) => {
        delete store[key];
      }
    };

    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);

    const mockAuth = {
      logout: (() => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
      })
    }

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthenticationService, useValue: mockAuth }
      ]
    }).compileComponents();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SEP6WebApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MovieStar');
  });

  it('should log out and remove localstorage items', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Act
    app.logout();

    // Assert
    expect(localStorage.removeItem).toHaveBeenCalledTimes(2)
    expect(localStorage.removeItem).toHaveBeenCalledWith("token")
    expect(localStorage.removeItem).toHaveBeenCalledWith("username")
  });

});
