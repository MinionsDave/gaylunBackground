import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'

import { environment } from '../environments/environment'

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

}
