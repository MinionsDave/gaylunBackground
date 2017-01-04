import { Component, OnInit } from '@angular/core'

import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    UserService
  ]
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(userService: UserService) { }

  ngOnInit() {
  }

}
