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

export const scatterDiagramOption = {
    title: {
        text: '本周来访散点图',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        showDelay: 0,
        formatter: function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                    + params.value[0] + '分， '
                    + params.value[1] + '￥ ';
            }
            else if (params.name == "平均消费") {
                return params.seriesName + ' :<br/>'
                    + params.name + ' : '
                    + params.value + '￥ ';
            }
            else {
                return params.seriesName + ' :<br/>'
                    + params.name + ' : '
                    + params.value + '分 ';
            }
        },
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    xAxis: [
        {
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} 分'
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} ￥'
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [
        {
            name: '成绩-消费统计',
            type: 'scatter',
            data: [
                [84.22, 24],
                [62.21, 6],
                [76.12, 36],
                [84.77, 41],
                [64.33, 13],
                [80.75, 29],
                [90.38, 11],
                [58.43, 16],
                [87.78, 12],
                [89.1, 9],
                [77.8, 15],
                [81.89, 20],
                [67.43, 40],
                [71.94, 45],
                [78.63, 60],
                [61.71, 3],
                [82.91, 13]
            ]
        }

    ]
};

