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
                            grid:{x:40,y:60,x2:30,y2:30},
                            legend: {
                                data:['在线设备', '在线时长'],
                                textStyle:{
                                    color:'#fff'
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
                    drawmap:function(id){ 
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        this.chart.showLoading();
                        let that =this;
                        Vue.axios.get('app/data/Json/hangzhou.json', {
                            params: 'data'
                          }).then((res) => {
                         that.chart.hideLoading();
                         echarts.registerMap('HZ', res.data);
                         console.info(res.data);
                            
                        var option = {
                            title: {
                                text: '',
                                subtext: '',
                                sublink: '',
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                showDelay: 0,
                                transitionDuration: 0.2,
                                formatter: function (params) {
                                    var value = params.value;
                                    return params.seriesName + '<br/>' + params.name + ': ' + value;
                                }
                            },
                            series: [
                                {
                                    name: '设备数量',
                                    type: 'map',
                                    roam: true,
                                    map: 'HZ',
                                    itemStyle:{
                                        //默认显示地图地名
                                        normal:{label:{show:true}},
                                        emphasis:{label:{show:true}}
                                    },
                                    // 文本位置修正
                                    textFixed: {
                                        Alaska: [20, -20]
                                    },
                                    data:[
                                
                                  
                                        {name: '西湖区', value: 11},
                                        {name: '拱墅区', value: 12},
                                        {name: '上城区', value: 14},
                                        {name: '下城区', value: 15},
                                        {name: '江干区', value: 11},
                                        {name: '萧山区', value: 12},
                                       
                                    ],
                                }
                            ]
                        };
                        console.info(this.chart);  
                        that.chart.setOption(option);
                       
                          }).catch((err) => {
                            console.log(err)
                            alert('请求出错！')
                          })
                    },
                    gaugeindex:function(id){
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        
                        let option = {
                            tooltip : {
                                formatter: "{a} <br/>{b} : {c}%"
                            },
                   
                         
                            toolbox: {
                                show:false,
                                feature: {
                                    restore: {},
                                    saveAsImage: {}
                                }
                            },
                            series: [
                                {
                                    radius: '90%',
                                    name: '在线指标',
                                    type: 'gauge',
                                    detail: {formatter:'{value}%'},
                                    data: [{value: 50, name: '在线率'}],
                                    axisLine: {            // 坐标轴线
                                        lineStyle: {       // 属性lineStyle控制线条样式
                                            color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                                            width: 3,
                                            shadowColor : '#fff', //默认透明
                                            shadowBlur: 10
                                        }
                                    },
                                    axisLabel: {            // 坐标轴小标记
                                        textStyle: {       // 属性lineStyle控制线条样式
                                            fontWeight: 'bolder',
                                            color: '#fff',
                                            shadowColor : '#fff', //默认透明
                                            shadowBlur: 10
                                        }
                                    },
                                    axisTick: {            // 坐标轴小标记
                                        length :15,        // 属性length控制线长
                                        lineStyle: {       // 属性lineStyle控制线条样式
                                            color: 'auto',
                                            shadowColor : '#fff', //默认透明
                                            shadowBlur: 10
                                        }
                                    },
                                    splitLine: {           // 分隔线
                                        length :25,         // 属性length控制线长
                                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                            width:3,
                                            color: '#fff',
                                            shadowColor : '#fff', //默认透明
                                            shadowBlur: 10
                                        }
                                    },
                                    pointer: {           // 分隔线
                                        shadowColor : '#fff', //默认透明
                                        shadowBlur: 5
                                    },
                                    title : {
                                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                            fontWeight: 'bolder',
                                            fontSize: 14,
                                        
                                            fontStyle: 'italic',
                                            color: '#fff',
                                            shadowColor : '#fff', //默认透明
                                            shadowBlur: 10
                                        }
                                    },
                                    detail : {
                                        backgroundColor: 'rgba(30,144,255,0.8)',
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        shadowColor : '#fff', //默认透明
                                        shadowBlur: 5,
                                        offsetCenter: [0, '80%'],       // x, y，单位px
                                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                            fontWeight: 'bolder',
                                            color: '#fff',
                                            fontSize:12,
                                        }
                                    },
                                }
                            ]
                        };

                        this.chart.setOption(option);
                        let _this =this;
                        setInterval(function (){
                            let val = parseFloat(60)+parseFloat((Math.random() * 20));
                            option.series[0].data[0].value = val.toFixed(2);
                            _this.chart.setOption(option,true);
                        },5000)

                    },
                    echarbar:function(id){
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        
                        let option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross',
                                    crossStyle: {
                                        color: '#999'
                                    }
                                }
                            },
                            grid:{x:30,y:15,x2:30,y2:35},
                            toolbox: {
                                feature: {
                                    dataView: {show: false, readOnly: false},
                                    magicType: {show: false, type: ['line', 'bar']},
                                    restore: {show: false},
                                    saveAsImage: {show: false}
                                }
                            },
                            legend: {
                                data:['在线设备','在线时长'],
                                textStyle:{
                                    color:'#fff'
                                }
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    data: ['滨江','上城','下城','萧山','拱墅','江干','萧山'],
                                    axisPointer: {
                                        type: 'shadow'
                                    },
                                    axisLine:{
                                        lineStyle:{
                                            color:'#fff'
                                        } 
                                     },
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value',
                                    name: '在线设备',
                                    min: 0,
                            
                               
                                    splitLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        formatter: '{value} ml'
                                    },
                                    axisLabel:{
                                        color:'#fff'
                                    },
                                    nameTextStyle:{
                                        color:'#fff'
                                    },
                                    axisLine:{
                                        lineStyle:{
                                            color:'#fff'
                                        } 
                                     }

                                },
                                {
                                    type: 'value',
                                    name: '在线时长',
                                    min: 0,
                                                                
                                    splitLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        formatter: '{value} '
                                    },
                                    nameTextStyle:{
                                        color:'#fff'
                                    },
                                    axisLine:{
                                        lineStyle:{
                                            color:'#fff'
                                        } 
                                     }
                                }
                            ],
                            series: [
                                {
                                    name:'在线设备',
                                    type:'bar',
                                    itemStyle: {
                                        color: 'rgb(180, 255, 11)'
                                    },
                                    data:[2, 4, 7, 8, 5, 7,15]
                                },
                                {
                                    name:'在线时长',
                                    type:'bar',
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
                                    yAxisIndex: 1,
                                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7,17]
                                }
                            ]
                        };
                        this.chart.setOption(option);

                    }
                  

                }
            }
        }
    })
}

export default {
    install
}