import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildSandbox } from '../child.sandbox';

import { ChildButtonComponent } from './child-button.component';

describe('ChildButtonComponent', () => {
  let component: ChildButtonComponent;
  let fixture: ComponentFixture<ChildButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildButtonComponent],
      providers: [ChildSandbox],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
