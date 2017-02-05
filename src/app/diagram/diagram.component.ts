import { Component, OnInit } from '@angular/core'
import { pieChartOption } from './diagram.constant'

import { ChartDataService } from '../chart-data.service'

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

  pieChartOption

  constructor(
    private chartDataService: ChartDataService
  ) { }

  ngOnInit() {
    this.chartDataService.getPieChartData()
                          .then(res => {
                            this.pieChartOption = Object.assign(pieChartOption)
                            this.pieChartOption.legend.data = res.map(o => o.name)
                            this.pieChartOption.series[0].data = res.map(o => ({
                              name: o._id,
                              value: o.totalCount
                            }))
                          })
  }

}
