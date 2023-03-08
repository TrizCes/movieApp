import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

  constructor(private readonly authService: AuthService,
    private readonly router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if( this.authService.isLoggedIn()){
      return true
    }

    this.router.navigate(['login']);
    return false;
  }

}
