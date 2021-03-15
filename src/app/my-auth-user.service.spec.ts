import { TestBed } from '@angular/core/testing';

import { MyAuthUserService } from './my-auth-user.service';

describe('MyAuthUserService', () => {
  let service: MyAuthUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAuthUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
