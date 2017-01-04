import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'

@Injectable()
export class UserService {
  private loginUrl = 'localhost:3000/api/login'

  constructor(private http: Http) { }

  login(user: any): Observable<any> {
    return this.http.post(this.loginUrl, user)
                    .map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json()
    return body.data || {}
  }
}
