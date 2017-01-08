import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'

import { Observable } from 'rxjs/Observable'

import { User } from './user'

@Injectable()
export class UserService {
  private loginUrl = '/api/session'

  constructor(private http: Http) { }

  login(user: User): Observable<Response> {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post(this.loginUrl, JSON.stringify(user), {headers})
  }
}
