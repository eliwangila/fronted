import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate() {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    return !this.userService.isLoggedIn();
  }
}
