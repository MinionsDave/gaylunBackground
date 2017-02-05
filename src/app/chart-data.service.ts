import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'

import { environment } from '../environments/environment'

@Injectable()
export class ChartDataService {

  constructor(private http: Http) { }

  getPieChartData(): Promise<any> {
    return new Promise ((resolve, reject) => {
      this.http.get(environment.serverUrl + '/visits/groupInfo/platform')
                .toPromise()
                .then(res => {
                  res = res.json()
                  resolve(res)
                })
    })
  }

}
