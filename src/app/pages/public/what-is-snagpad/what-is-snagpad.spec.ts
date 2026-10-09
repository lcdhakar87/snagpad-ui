import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsSnagpad } from './what-is-snagpad';

describe('WhatIsSnagpad', () => {
  let component: WhatIsSnagpad;
  let fixture: ComponentFixture<WhatIsSnagpad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsSnagpad],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatIsSnagpad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
