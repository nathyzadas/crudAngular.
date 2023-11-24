import { Injectable } from '@angular/core';
import { FirebaseloginService } from './firebaselogin.service';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, Router} from '@angular/router';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService  implements CanActivate{

  constructor(private service:FirebaseloginService, private router: Router )  { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('token');

    if (token && this.service.valiadarToken()) {
      return true;
    }else{
      this.router.navigate(['/'],{ queryParams:{return:state}})
      return false 
    }
  }
}

