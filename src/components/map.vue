<template>
    <div>
        <div id="map"></div>
    </div>
</template>
<script>
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import ImageLayer from 'ol/layer/Image.js';
import ImageWMS from 'ol/source/ImageWMS.js';
export default {
    mounted(){
        this.initMap();
    },
    methods:{
        initMap() {
            //let center = proj.transformExtent([103.3, 35.5], "EPSG:4326", "EPSG:3857");
           var wmsSource = new ImageWMS({
                url: 'https://ahocevar.com/geoserver/wms',
                params: {'LAYERS': 'ne:ne'},
                serverType: 'geoserver',
                crossOrigin: 'anonymous'
            });

      var wmsLayer = new ImageLayer({
                source: wmsSource
            });

      var view = new View({
                center: [0, 0],
                zoom: 1
            });

      var map = new Map({
                layers: [wmsLayer],
                target: 'map',
                view: view
            });

      
        }
    }

}
</script>
<style>
#map{
    widows: 500px; 
    height: 500px;
}
</style>
