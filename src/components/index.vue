<template>
    <div id="main">
       <div> <Map></Map></div>
       <div>
           <div class="top"><banner></banner></div>
           <div class="left"><Lmenu></Lmenu></div>
           <div class="bottom"><Dmenu></Dmenu></div>
       </div>
    </div>
</template>
<script>
import banner from "@/components/banner"
import Map from "@/components/map"
import Lmenu from "@/components/Lmenu"
import Dmenu from "@/components/Dmenu"
export default {
    data(){
       return{              
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
    },
    methods:{
        increase:function(val){
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
      background-color: #fff;
  }
.bottom{
      position:absolute;
      height: 250px;
      width: 100%;
      bottom: 0;
  }
</style>