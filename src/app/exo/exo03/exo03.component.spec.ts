import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo03Component } from './exo03.component';

describe('Exo03Component', () => {
  let component: Exo03Component;
  let fixture: ComponentFixture<Exo03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exo03Component]
    });
    fixture = TestBed.createComponent(Exo03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
