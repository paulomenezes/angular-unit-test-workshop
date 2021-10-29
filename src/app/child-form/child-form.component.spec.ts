import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChildFormComponent } from './child-form.component';

describe('ChildFormComponent', () => {
  let component: ChildFormComponent;
  let fixture: ComponentFixture<ChildFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ChildFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFormComponent);
    component = fixture.componentInstance;
    component.requiredFields = ['name'];
    component.person = {
      name: 'Paulo',
      age: 26,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
