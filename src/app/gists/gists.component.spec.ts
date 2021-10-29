import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RequestService } from '../request.service';

import { GistsComponent } from './gists.component';

describe('GistsComponent', () => {
  let component: GistsComponent;
  let fixture: ComponentFixture<GistsComponent>;

  let requestService: RequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GistsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GistsComponent);
    component = fixture.componentInstance;

    requestService = TestBed.inject(RequestService);
    requestService.getGists = jasmine.createSpy().and.returnValue(of([]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(requestService.getGists).toHaveBeenCalled();
    expect(requestService.getGists).toHaveBeenCalledWith('paulomenezes');
  });
});
