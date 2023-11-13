import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo08Component } from './demo08.component';

describe('Demo08Component', () => {
  let component: Demo08Component;
  let fixture: ComponentFixture<Demo08Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo08Component]
    });
    fixture = TestBed.createComponent(Demo08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
