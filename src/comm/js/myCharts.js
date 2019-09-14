/**
 * 各种画echarts图表的方法都封装在这里
 * 注意：这里echarts没有采用按需引入的方式，只是为了方便学习
 */

import echarts from 'echarts'
import { faFastForward } from '@fortawesome/fontawesome-free-solid'
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
                            grid:{x:40,y:60,x2:50,y2:30},
                            legend: {
                                data:['在线设备', '在线时长'],
                                textStyle:{
                                    color:'#fff'
                                }
                            },
                            dataZoom: {
                                show: true,
                                start: 0,
                                end: 100
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                  
                                    axisLine:{
                                        show: false
                                    },
                                   
                                    axisLine:{
                                       lineStyle:{
                                           color:'#fff'
                                       } 
                                    },
                                    boundaryGap: false,
                                    data: (function (){
                                        var now = new Date();
                                        var res = [];
                                        var len = 20;
                                        while (len--) {
                                            res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                                            now = new Date(now - 2000);
                                        }
                                        return res;
                                    })()
                                },
                                {
                                    type: 'category',
                                  
                                    axisLine:{
                                        show: false
                                    },
                                    boundaryGap: false,
                                   
                                },
                            ],
                            yAxis: [
                                {
                                    type: 'value',
                                    scale: true,
                                    splitLine: {
                                        show: false
                                    },
                                    axisLabel:{
                                        color:'#fff'
                                    },
                                    name: '设备数量',
                                    max: 30,
                                    nameTextStyle:{
                                        color:'#fff'
                                    },
                                    min: 0,
                                    boundaryGap: [0.2, 0.2],
                                    axisLine:{
                                       lineStyle:{
                                           color:'#fff'
                                       } 
                                    }
                                },
                                {
                                    type: 'value',
                                    scale: true,
                                    name: '在线时长',
                                    nameTextStyle:{
                                        color:'#fff'
                                    },
                                    axisLabel:{
                                        color:'#fff'
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    min: 80,
                                    boundaryGap: [0.2, 0.2],
                                    axisLine:{
                                       lineStyle:{
                                           color:'#fff'
                                       } 
                                    }
                                }
                            ],
                            series: [
                                {
                                    name:'在线时长',
                                    type:'line',
                                    xAxisIndex: 1,
                                    smooth:true, 
                                    itemStyle: {
                                        color: 'rgb(180, 255, 11)'
                                    },
                                    areaStyle: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgb(255, 255, 68)'
                                        }, {
                                            offset: 1,
                                            color: 'rgb(0, 70, 131)'
                                        }])
                                    },
                                    yAxisIndex: 1,
                                    data:(function (){
                                        var res = [];
                                        let len = 20;
                                        while (len >= 0) {
                                            res.push(100+Math.round(Math.random())-len);
                                            len--;
                                        }
                                        return res;
                                    })()
                                },
                                {
                                    name:'在线设备',
                                    type:'line',
                                    smooth:false, 
                                    itemStyle: {
                                        color: 'rgb(43, 129, 190)'
                                    },
                                    areaStyle: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgb(4, 38, 87)'
                                        }, {
                                            offset: 1,
                                            color: 'rgb(237, 46, 96)'
                                        }])
                                    },
                                    data:(function (){
                                        var res = [];
                                        let len = 0;
                                        while (len < 20) {
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
                            data0.push(data0[data0.length-1]+Math.round(Math.random()));
                            data1.shift();
                            data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
                        
                            option.xAxis[0].data.shift();
                            option.xAxis[0].data.push(axisData);  
                            that.chart.setOption(option);
                        }, 5000);
                    },
                  

                }
            }
        }
    })
}

export default {
    install
}