import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeeker } from './job-seeker';

describe('JobSeeker', () => {
  let component: JobSeeker;
  let fixture: ComponentFixture<JobSeeker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeeker],
    }).compileComponents();

    fixture = TestBed.createComponent(JobSeeker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
