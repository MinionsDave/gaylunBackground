import { Component, OnInit } from '@angular/core'
import { ChartDataService } from '../chart-data.service'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})

export class CountComponent implements OnInit {
  listData = [
    {
      name: '今日来访数量',
      value: this.chartDataService.getPeriodCount('today')
    }, {
      name: '昨日来访数量',
      value: this.chartDataService.getPeriodCount('yesterday')
    }, {
      name: '本周来访数量',
      value: this.chartDataService.getPeriodCount('thisWeek')
    }, {
      name: '上周来访数量',
      value: this.chartDataService.getPeriodCount('lastWeek')
    }, {
      name: '本月来访数量',
      value: this.chartDataService.getPeriodCount('thisMonth')
    }, {
      name: '上月来访数量',
      value: this.chartDataService.getPeriodCount('lastMonth')
    }, {
      name: '总来访数量',
      value: this.chartDataService.getPeriodCount('all')
    }
  ]

  constructor(private chartDataService: ChartDataService) { }

  ngOnInit() {
  }

}
