import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ChildButtonComponent } from './child-button/child-button.component';
import { GistsComponent } from './gists/gists.component';

@Component({ selector: 'app-child-form', template: '<div></div>' })
class MockChildForm {
  @Input() requiredFields: string[] = [];
  @Input() person!: any;
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [
        AppComponent,
        ChildButtonComponent,
        MockChildForm,
        GistsComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app).toBeTruthy();

    expect(app.title).toEqual('Angular Unit Test');
  });
});
