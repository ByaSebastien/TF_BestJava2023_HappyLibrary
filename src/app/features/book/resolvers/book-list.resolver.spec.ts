import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { bookListResolver } from './book-list.resolver';

describe('bookListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => bookListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
