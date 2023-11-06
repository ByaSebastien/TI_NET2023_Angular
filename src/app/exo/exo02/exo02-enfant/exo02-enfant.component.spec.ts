import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo02EnfantComponent } from './exo02-enfant.component';

describe('Exo02EnfantComponent', () => {
  let component: Exo02EnfantComponent;
  let fixture: ComponentFixture<Exo02EnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exo02EnfantComponent]
    });
    fixture = TestBed.createComponent(Exo02EnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
