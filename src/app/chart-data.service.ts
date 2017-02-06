import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'

import { environment } from '../environments/environment'

class DayCountModel {
  timestamp: number
  count: number
}

@Injectable()
export class ChartDataService {

  constructor(private http: Http) { }

  getPieChartData(field: string): Promise<any> {
    return new Promise ((resolve, reject) => {
      this.http.get(`${environment.serverUrl}/visits/groupInfo/${field}`)
                .toPromise()
                .then(res => {
                  let body: Array<any> = res.json()
                  resolve(body.map(o => ({
                    name: o._id,
                    value: o.totalCount
                  })))
                })
                .catch(reject)
    })
  }

  getPeriodCount(period: string): Observable<Response> {
    return this.http.get(`${environment.serverUrl}/visits/count/${period}`)
                    .map(res => res.json())
  }

  getCountPerDay(): Observable<Array<DayCountModel>> {
    return this.http.get(`${environment.serverUrl}/visits/groupCounting`)
                    .map(res => res.json())
  }

}
