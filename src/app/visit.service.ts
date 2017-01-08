import { Injectable } from '@angular/core'
import { Http, URLSearchParams } from '@angular/http'

import { Observable } from 'rxjs/Observable'

import { Visit } from './visit'

@Injectable()
export class VisitService {

  constructor(private http: Http) { }

  index(pageNo: Number, pageSize: Number): Observable<any> {
    let urlSearchParams = new URLSearchParams()
    urlSearchParams.append('pageNo', pageNo + '')
    urlSearchParams.append('pageSize', pageSize + '')
    return this.http.get(`/api/visits?${urlSearchParams.toString()}`)
                    .map(res => res.json())
  }

}
