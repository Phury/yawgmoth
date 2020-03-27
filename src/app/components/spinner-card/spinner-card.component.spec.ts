import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCardComponent } from './spinner-card.component';

describe('SpinnerCardComponent', () => {
  let component: SpinnerCardComponent;
  let fixture: ComponentFixture<SpinnerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
