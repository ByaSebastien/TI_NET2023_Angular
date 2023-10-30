import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo01Component } from './exo01.component';

describe('Exo01Component', () => {
  let component: Exo01Component;
  let fixture: ComponentFixture<Exo01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exo01Component]
    });
    fixture = TestBed.createComponent(Exo01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
