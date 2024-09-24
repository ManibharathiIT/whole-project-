import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularApiComponent } from './angular-api.component';

describe('AngularApiComponent', () => {
  let component: AngularApiComponent;
  let fixture: ComponentFixture<AngularApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularApiComponent]
    });
    fixture = TestBed.createComponent(AngularApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
