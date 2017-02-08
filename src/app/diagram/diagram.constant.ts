export const pieChartOption = {
    title: {
        text: '所看平台比例',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['变压器', '断路器', '隔离开关', '开关柜', '绝缘子']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: '变压器' },
                { value: 335, name: '断路器' },
                { value: 335, name: '隔离开关' },
                { value: 335, name: '开关柜' },
                { value: 1548, name: '绝缘子' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}

export const lineChartOption = {
    title: {
        text: '来访趋势图',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name: '来访人数',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0]
        }
    ]
}
