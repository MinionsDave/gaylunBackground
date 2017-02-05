import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'

import { Observable } from 'rxjs/Observable'

import { User } from './user'

import { environment } from '../environments/environment'

@Injectable()
export class UserService {
  isLoggedIn = false

  redirectUrl: string

  private loginUrl = environment.serverUrl + '/session'

  constructor(private http: Http) { }

  login(user: User): Observable<Response> {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post(this.loginUrl, JSON.stringify(user), {headers})
  }

  logout() {
    this.isLoggedIn = false
  }
}
