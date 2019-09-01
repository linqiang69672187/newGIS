<template>
    <div>
        
    </div>
</template>
<script>
import {Map,View} from "ol";
import TileLayer from 'ol/layer/Tile';
import sourceXYZ from 'ol/source/XYZ';
import layerGroup from 'ol/layer/Group';
import {defaults as defaultControls} from 'ol/control';
import {transform} from 'ol/proj.js';
export default {
    mounted(){
        this.initMap();
    },
    methods:{
        initMap() {

       var url = "http://127.0.0.1:8081/"+"baidu/tiles/{z}/{x}/{-y}.jpg";

        var baiduMapLayer2 = new TileLayer({
            source: new sourceXYZ({
                minZoom: 2,
                maxZoom: 14,
                projection: 'EPSG:3857',
                tileSize: 256,
                url: url
            })
        })

    
    // 创建地图
            var map = new Map({
                layers: [new layerGroup({
                    'title': '基础图层',
                    layers: [baiduMapLayer2]
                })
                ],
                controls: defaultControls({
                    attribution: false,
                    rotate: false,
                    zoom:false
                }).extend([]),
                view: new View({
                    // 设置地图中心
                    center: transform([121.26303583068851, 28.652394518616234], 'EPSG:4326', 'EPSG:3857'),
                    zoom: 12,
                    maxZoom: 17,
                    minZoom: 10

                }),
                target: this.$el
            });

    

      
        }
    }

}
</script>
<style scoped>

</style>
