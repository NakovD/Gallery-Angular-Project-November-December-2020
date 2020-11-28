import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isLoggedFromData = route.data.isLoggedIn;
        if (typeof isLoggedFromData === 'boolean' && isLoggedFromData === this.userService.isLoggedIn) {
            return true;
        }
        const url = this.router.url;
        this.router.navigateByUrl(url);
        return false;
    }

}
