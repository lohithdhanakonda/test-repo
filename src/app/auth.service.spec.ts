import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('userEmail', 'lohith.dhanakonda@acsicorp.com');
    expect(service.isAuthenticated()).toBeTruthy();
  });
});
