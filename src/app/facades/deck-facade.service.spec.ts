import { TestBed } from '@angular/core/testing';

import { DeckFacade } from './deck-facade.service';

describe('DeckFacadeService', () => {
  let service: DeckFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
