import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyAuthUserService } from './my-auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class MyAuthGuardGuard implements CanActivate {


  constructor(private router: Router, private userService: MyAuthUserService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    //return true;
    
    //return this.userService.isUserAthorized();

    if (this.userService.isUserAthorized()) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }

  }
  
}
