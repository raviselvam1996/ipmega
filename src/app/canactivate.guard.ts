import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {

constructor(private authservice:AuthService,private router:Router){}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot):boolean | UrlTree {
    if(this.authservice.isloggedin){
      return true;

    }
    else{
      // this.router.navigate(['home'])
      return false;
    }
  }
  
}
