import { Component, OnInit } from '@angular/core'

import { UserService } from '../user.service'

import { User } from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    UserService
  ]
})
export class LoginComponent implements OnInit {

  user = new User('', '')

  constructor(private userService: UserService) { }

  login() {
    this.userService.login(this.user)
        .subscribe(function(res) {
          console.log(res)
        })
  }

  ngOnInit() {
  }

}
