import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardService } from './auth-guard.service';

function fakeRouterState(url: string): RouterStateSnapshot {
  return {
    url,
  } as RouterStateSnapshot;
}
describe('AuthGuardService', () => {
  let service: AuthGuardService;

  let dummyRoute: ActivatedRouteSnapshot;
  let routerSpy: jasmine.SpyObj<Router>;
  const fakeUrls = ['/', '/login', '/enroll'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);
    dummyRoute = {} as ActivatedRouteSnapshot;
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  //written by me
  it('grants route access', () => {
    const canActivate = service.canActivate(dummyRoute, fakeRouterState("enroll")); 
    window.localStorage.clear()
    // window.localStorage.setItem("userEmail", "lohith.dhanakonda@acsicorp.com")
    // console.log(window.localStorage,"==window.localStorage")
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith("/login")
    expect(canActivate).toBeFalse(); // [3]
  });
});
