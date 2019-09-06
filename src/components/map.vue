<template>
    <div >
    </div>
</template>
<script>
import math from "@/mixin/math"
import {Map,View} from "ol";
import TileLayer from 'ol/layer/Tile';
import sourceXYZ from 'ol/source/XYZ';
import layerGroup from 'ol/layer/Group';
import {defaults as defaultControls} from 'ol/control';
import FullScreen from 'ol/control/FullScreen.js';
import {transform} from 'ol/proj.js';
import {Vector as VectorSource} from 'ol/source.js';
import {Vector as VectorLayer} from 'ol/layer.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import {Circle as CircleStyle, Fill, Stroke, Style,Text} from 'ol/style.js';
import { debug } from 'util';

let noticemod;
export default {
    mounted(){
        this.initMap();
    },
    mixins:[math,],
    data: function () {
        return {
            type: this.moveType
        }
        },
   props:['moveType'],
    destroyed(){
            clearInterval(noticemod);
        },
   methods:{
        initMap() {
       
       var url = "http://127.0.0.1:8081/"+"baidu/tiles/{z}/{x}/{-y}.jpg";
       var center;
            switch(this.type){
                case "1":
                  center= [121.23303583068851, 28.152394518616234]; 
                     break;
                  case "2":                  
                  center= [121.26103583068851, 28.452394518616234]; 
                   break;
                case "3":                  
                  center= [121.23103583068851, 28.152394518616234]; 
                   break;
                case "4":                  
                  center= [121.27103583068851, 28.152394518616234]; 
                   break; 
                case "5":                  
                  center= [121.25103583068851, 28.252394518616234]; 
                break;      
                default:
                  center= [121.26303583068851, 28.652394518616234]; 
                    break;
            }
        var baiduMapLayer2 = new TileLayer({
            source: new sourceXYZ({
                minZoom: 2,
                maxZoom: 14,
                projection: 'EPSG:3857',
                tileSize: 256,
                url: url
            })
        })
        if (this.type!=0){
        var features = new Array(1);
        let coordinates = transform(center, 'EPSG:4326', 'EPSG:3857');
        features[0]=new Feature(new Point(coordinates));
        }
        var vectorSource = new VectorSource({
            features: features//add an array of features
        });
        var styleCache = {};
        var vectorLayer = new VectorLayer({
            source: vectorSource,
            title: '警员',
            visible: true,
            style: function(feature) {
                var size = 1;
                var style = styleCache[size];
                if (!style) {
                    style = new Style({
                    image: new CircleStyle({
                        radius: 8,
                        stroke: new Stroke({
                        color: '#fff'
                        }),
                        fill: new Fill({
                        color: 'rgba(0, 0, 0, 0.6)'
                        })
                    }),
                    text:  new Text({
                        text: '\uf077',
                        font: 'normal 16px FontAwesome',
                        textBaseline: 'middle',
                        fill: new Fill({
                        color: '#fff',
                        })
                    })
                    });
                    styleCache[size] = style;
                }
                return style;
        }
        });

    //var fullScreenControl = new FullScreen({
    //    target:"fullscreenid"
   // });
    // 创建地图
           
            var map = new Map({
                layers: [new layerGroup({
                    'title': '基础图层',
                    layers: [baiduMapLayer2,vectorLayer]
                })
                ],
                controls: defaultControls({
                    attribution: false,
                    rotate: false,
                    zoom:false
                }).extend([]),
                view: new View({
                    // 设置地图中心
                    center: transform(center, 'EPSG:4326', 'EPSG:3857'),
                    zoom: 14,
                    maxZoom: 17,
                    minZoom: 10

                }),
                target: this.$el
            });
     if (this.type!=0){
         var that = this;
        noticemod= setInterval(function (){
                 var feature =vectorSource.getFeatures();
                 if (feature){
                   var cd1= that.getRandomNumberByRange(0,2);
                   var cd2 = that.getRandomNumberByRange(0,2);
                   var coordinates = feature[0].getGeometry().getCoordinates();
                    switch (cd1){
                        case 1:
                            coordinates[0]+=100;
                              break;
                        case 2:
                            coordinates[0]-=100;
                        break;
                        default:
                            break;
                    }
                     switch (cd2){
                        case 1:
                            coordinates[1]+=100;
                              break;
                        case 2:
                            coordinates[1]-=100;
                        break;
                        default:
                            break;
                    }
                    let rotationvalue=0;
                    switch(cd1+""+cd2){
                        case '00':
                            rotationvalue=0;
                            break;
                        case '01':
                             rotationvalue=0;
                             break;
                        case '02':
                           rotationvalue=180;  
                           break; 
                        case '10':
                            rotationvalue=90;
                            break;
                        case '11':
                             rotationvalue=45;
                             break;
                        case '12':
                           rotationvalue=135;  
                           break; 
                        case '20':
                            rotationvalue=270;
                            break;
                        case '21':
                             rotationvalue=315;
                             break;
                        case '22':
                             rotationvalue=225;  
                             break;         

                    }
                    
                   feature[0].setGeometry(new Point(coordinates));
                   map.getView().animate({center:coordinates},{rotation:rotationvalue});
                   map.render();
                 }    
                           
         }, 3000);
        
        } 


      
        }
    }

}
</script>
<style scoped>
div{
    height: 100%;
}

</style>
