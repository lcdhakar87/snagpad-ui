import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachHeader } from './coach-header';

describe('CoachHeader', () => {
  let component: CoachHeader;
  let fixture: ComponentFixture<CoachHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(CoachHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
