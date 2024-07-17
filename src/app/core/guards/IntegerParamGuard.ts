import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegerParamGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const id = next.paramMap.get('id');
    
    // Parametre var mı ve bir sayı mı?
    if (id && /^\d+$/.test(id)) {
      // Tam sayı ise true döndürerek sayfaya izin ver
      return true;
    } else {
      // Değilse hata sayfasına yönlendir
      console.log("IntegerParamGuard");
      return this.router.parseUrl('/error');
    }
  }
}
