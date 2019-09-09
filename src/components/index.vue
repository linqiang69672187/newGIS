<template>
    <div id="main">
       <div>
           <Map move-type="0"></Map>
           <MapToolbox></MapToolbox>
           <Callbox :class="{hidedmenu}"></Callbox>
           <notice ></notice>
           <LeftToolbox :style="{bottom:dmenuszie}"></LeftToolbox>
       </div>
       <div>
           <div class="top"><banner></banner></div>
           <div class="left" :class="{hidedmenu}"><Lmenu></Lmenu></div>
           <div class="bottom"><Dmenu @listenchange="listenchangeDmenu"></Dmenu></div>
       </div>
    </div>
</template>
<script>
import banner from "@/components/banner"
import Map from "@/components/map"
import Lmenu from "@/components/Lmenu"
import Dmenu from "@/components/Dmenu"
import MapToolbox from "@/components/MapToolbox"
import Callbox from "@/components/control/CallBox"
import notice from "@/components/control/notices"
import LeftToolbox from "@/components/control/LeftToolbox"

export default {
    data(){
       return{
           hidedmenu:true,
           dmenuszie: '10px !important',             
       }
    },
    mounted() {
    },
    computed:{
    },
    components:{
        banner,
        Map,
        Lmenu,
        Dmenu,
        MapToolbox,
        Callbox,
        notice,
        LeftToolbox,
    },
    methods:{
        increase:function(val){
        },
        listenchangeDmenu:function(isshow){
           this.hidedmenu=!isshow;
           (isshow)?this.dmenuszie='260px !important':this.dmenuszie='10px !important'
          // console.info(isshow+this.dmenuszie)
        }
    }
}
</script>
<style scoped>
  #main {
    width: 100%;
    height: 100%;
  }
  #main>div {
    width: 100%;
    height: 100%;
  }
  .top{
      position:absolute;
      top: 0;
      height: 58px;
      width: 100%;
      background-color: #fff;
  }
  .left{
      position:absolute;
      left: 0;
      width: 280px;
      top:58px;
      bottom: 250px;
   
  }
  .hidedmenu{
      bottom: 0 !important;
  }
.bottom{
      position:absolute;
      width: 100%;
      bottom: 0;
  }
  .toolboxdiv{
      position: absolute;
      right: -100px;
      top: 70px;
      
  }
  .callbox{
      position: absolute;
      bottom: 250px;
 
  }
  #bottom-right-wrapper,.callbox,.left{
         transition:all 0.6s;
    -moz-transition:all 0.6s; /* Firefox 4 */
    -webkit-transition:all 0.6s; /* Safari and Chrome */
     -o-transition:all 0.6s; /* Opera */
  }
</style>