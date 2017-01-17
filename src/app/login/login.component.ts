import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { UserService } from '../user.service'

import { User } from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = new User('', '')

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  login() {
    this.userService.login(this.user)
        .subscribe(() => {
          this.userService.isLoggedIn = true
          let redirect = this.userService.redirectUrl || '/visits'
          this.router.navigate([redirect])
        })
  }

}
