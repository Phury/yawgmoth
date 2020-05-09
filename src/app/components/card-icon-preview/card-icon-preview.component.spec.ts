import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIconPreviewComponent } from './card-icon-preview.component';

describe('CardIconPreviewComponent', () => {
  let component: CardIconPreviewComponent;
  let fixture: ComponentFixture<CardIconPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIconPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIconPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
