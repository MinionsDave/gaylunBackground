import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { UserService } from './user.service'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLogin(state.url)
    }

    checkLogin(url: string): boolean {
        if (this.userService.isLoggedIn) return true
        this.userService.redirectUrl = url
        this.router.navigate(['/login'])
        return false
    }
}
