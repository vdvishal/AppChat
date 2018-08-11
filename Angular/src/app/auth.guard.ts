import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from '../../node_modules/ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private cookie:CookieService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(localStorage.getItem("authToken") === null || localStorage.getItem("authToken") === undefined || localStorage.getItem("authToken") === '') {
      this.router.navigate(['/login']);
      return false  
    }
    else{
      return true
    } 
  }
}
