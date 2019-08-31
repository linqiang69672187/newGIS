/**
 * 各种画echarts图表的方法都封装在这里
 * 注意：这里echarts没有采用按需引入的方式，只是为了方便学习
 */

import echarts from 'echarts'
const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //画一条简单的线
                    line1: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line',
                                smooth: true
                            }]
                        };

                        this.chart.setOption(optionData);
                    },
                    dynamicline:function(id){
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        
                        function randomData() {
                            now = new Date(+now + oneDay);
                            value = value + Math.random() * 21 - 10;
                            return {
                                name: now.toString(),
                                value: [
                                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                                    Math.round(value)
                                ]
                            }
                        }
                        
                        var data = [];
                        var now = +new Date(1997, 9, 3);
                        var oneDay = 24 * 3600 * 1000;
                        var value = Math.random() * 1000;
                        for (var i = 0; i < 1000; i++) {
                            data.push(randomData());
                        }
                       let  option = {
                            title: {
                                text: '',
                                subtext: ''
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross',
                                    label: {
                                        backgroundColor: '#283b56'
                                    }
                                }
                            },
                            legend: {
                                data:['在线设备', '在线时长']
                            },
                            toolbox: {
                                show: true,
                                feature: {
                                    dataView: {readOnly: false},
                                    restore: {},
                                    saveAsImage: {}
                                }
                            },
                            dataZoom: {
                                show: false,
                                start: 0,
                                end: 100
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    boundaryGap: true,
                                    data: (function (){
                                        var now = new Date();
                                        var res = [];
                                        var len = 10;
                                        while (len--) {
                                            res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                                            now = new Date(now - 2000);
                                        }
                                        return res;
                                    })()
                                },
                                {
                                    type: 'category',
                                    boundaryGap: true,
                                    data: (function (){
                                        var res = [];
                                        var len = 10;
                                        while (len--) {
                                            res.push(10 - len - 1);
                                        }
                                        return res;
                                    })()
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value',
                                    scale: true,
                                    name: '数量',
                                    max: 30,
                                    min: 0,
                                    boundaryGap: [0.2, 0.2]
                                },
                                {
                                    type: 'value',
                                    scale: true,
                                    name: '时长',
                                    max: 1200,
                                    min: 0,
                                    boundaryGap: [0.2, 0.2]
                                }
                            ],
                            series: [
                                {
                                    name:'在线时长',
                                    type:'bar',
                                    xAxisIndex: 1,
                                    yAxisIndex: 1,
                                    data:(function (){
                                        var res = [];
                                        var len = 10;
                                        while (len--) {
                                            res.push(Math.round(Math.random() * 1000));
                                        }
                                        return res;
                                    })()
                                },
                                {
                                    name:'在线设备',
                                    type:'line',
                                    smooth:true, 
                                    itemStyle: {
                                        color: 'rgb(255, 70, 131)'
                                    },
                                    areaStyle: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgb(0, 158, 68)'
                                        }, {
                                            offset: 1,
                                            color: 'rgb(0, 70, 131)'
                                        }])
                                    },
                                    data:(function (){
                                        var res = [];
                                        var len = 0;
                                        while (len < 10) {
                                            res.push((Math.random()*10 + 5).toFixed(1) - 0);
                                            len++;
                                        }
                                        return res;
                                    })()
                                }
                            ]
                        };
                        this.chart.setOption(option);
                        let that =this;
                        app.count = 11;
                        setInterval(function (){
                            let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
                        
                            var data0 = option.series[0].data;
                            var data1 = option.series[1].data;
                            data0.shift();
                            data0.push(Math.round(Math.random() * 1000));
                            data1.shift();
                            data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
                        
                            option.xAxis[0].data.shift();
                            option.xAxis[0].data.push(axisData);
                            option.xAxis[1].data.shift();
                            option.xAxis[1].data.push(app.count++);
                        
                            that.chart.setOption(option);
                        }, 2000);
                    }

                }
            }
        }
    })
}

export default {
    install
}