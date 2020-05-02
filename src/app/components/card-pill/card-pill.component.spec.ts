import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPillComponent } from './card-pill.component';

describe('CardPillComponent', () => {
  let component: CardPillComponent;
  let fixture: ComponentFixture<CardPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
