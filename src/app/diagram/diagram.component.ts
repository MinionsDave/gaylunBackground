import { Component, OnInit } from '@angular/core'
import { pieChartOption, lineChartOption, scatterDiagramOption } from './diagram.constant'

import { ChartDataService } from '../chart-data.service'

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

  pieChartOption
  categoryPieChartOption
  lineChartOption
  scatterDiagramOption = scatterDiagramOption

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

    this.chartDataService.getCountPerDay()
                          .subscribe((res) => {
                            this.lineChartOption = lineChartOption
                            this.lineChartOption.xAxis.data = res.map(o => {
                              let date = new Date(o.timestamp)
                              return `${date.getMonth() + 1}/${date.getDate()}`
                            })
                            this.lineChartOption.series[0].data = res.map(o => o.count)
                          })
  }

}
