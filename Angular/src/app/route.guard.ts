import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let auth = localStorage.getItem("authToken") === null || localStorage.getItem("authToken") === undefined || localStorage.getItem("authToken") === ''
      if(!auth) {
        this.router.navigate(['/chatroom']);
        return false  
      }
      else{
        return true
      } 
    }
  }

