import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultComponent } from './difficult.component';

describe('DifficultComponent', () => {
  let component: DifficultComponent;
  let fixture: ComponentFixture<DifficultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifficultComponent]
    });
    fixture = TestBed.createComponent(DifficultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
