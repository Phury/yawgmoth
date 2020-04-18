import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyruneComponent } from './keyrune.component';

describe('KeyruneComponent', () => {
  let component: KeyruneComponent;
  let fixture: ComponentFixture<KeyruneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyruneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyruneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
