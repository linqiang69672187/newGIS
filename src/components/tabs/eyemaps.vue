<template>
    <div class="row">
        <ul>
            <li> 
             <Map></Map>
            </li>
            <li> 
             <Map></Map>
            </li>
            <li> 
             <Map></Map>
            </li>
            <li> 
             <Map></Map>
            </li>
            <li> 
             <Map></Map>
            </li>
            <li> 
             <Map></Map>
            </li>
            <li> 
             <Map></Map>
            </li>
        </ul>
    </div>
</template>
<script>
import Map from "@/components/map"

export default {
        data () {
                return {
                         
                    }
        },
    mounted(){

        },
    methods:{     
        },
    components: {
      Map
         }
    }


</script>
<style scoped>
.row{
    width: 100%; 
    height:220px;
    background-color: #fff;
    overflow-x: auto;
    overflow-y: hidden;
}

.row>ul,.row>ul>li{

    height:220px;
    display: inline-block;
    white-space: nowrap; 
}
li>div{
    height: 220px;
}
</style>
<style >
.vjs-big-play-button{
    top:85px !important;
    left: 150px !important;
}
</style>