import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantExo03Component } from './enfant-exo03.component';

describe('EnfantExo03Component', () => {
  let component: EnfantExo03Component;
  let fixture: ComponentFixture<EnfantExo03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnfantExo03Component]
    });
    fixture = TestBed.createComponent(EnfantExo03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
