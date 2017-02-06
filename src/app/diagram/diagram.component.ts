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
  categoryPieChartOption

  constructor(
    private chartDataService: ChartDataService
  ) { }

  ngOnInit() {
    this.chartDataService.getPieChartData('platform')
                          .then(res => {
                            this.pieChartOption = JSON.parse(JSON.stringify(pieChartOption))
                            this.pieChartOption.legend.data = res.map(o => o.name)
                            this.pieChartOption.series[0].data = res
                          })

    this.chartDataService.getPieChartData('category')
                          .then(res => {
                            this.categoryPieChartOption = JSON.parse(JSON.stringify(pieChartOption))
                            this.categoryPieChartOption.title.text = '所看类目比例'
                            this.categoryPieChartOption.legend.data = res.map(o => o.name)
                            this.categoryPieChartOption.series[0].data = res
                          })
  }

}
