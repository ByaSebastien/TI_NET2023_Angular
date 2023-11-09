import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo07Component } from './demo07.component';

describe('Demo07Component', () => {
  let component: Demo07Component;
  let fixture: ComponentFixture<Demo07Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo07Component]
    });
    fixture = TestBed.createComponent(Demo07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
