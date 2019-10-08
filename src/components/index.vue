<template>
    <div id="main">
         <v-contextmenu ref="contextmenu" >
            <v-contextmenu-item @click="handleClick('拨号盘')">拨号盘</v-contextmenu-item>
            <v-contextmenu-item @click="handleClick">实时状况</v-contextmenu-item>

            <v-contextmenu-item divider></v-contextmenu-item>

            <v-contextmenu-submenu title="调度功能">
                <v-contextmenu-item @click="handleClick">菜单3</v-contextmenu-item>

                <v-contextmenu-item divider></v-contextmenu-item>

                <v-contextmenu-submenu title="子菜单">
                <v-contextmenu-item @click="handleClick">菜单5</v-contextmenu-item>
                </v-contextmenu-submenu>

                <v-contextmenu-item @click="handleClick">菜单4</v-contextmenu-item>

                <v-contextmenu-item :auto-hide="false">不自动关闭1</v-contextmenu-item>
                <v-contextmenu-item :auto-hide="false">不自动关闭2</v-contextmenu-item>
            </v-contextmenu-submenu>
            </v-contextmenu>
      <div class="top" ><banner :isshowmini="isshowmini" @Bannerselectedchange='Bannerselectedchange'></banner></div>
       <div>
            <Map  class="map" v-contextmenu:contextmenu move-type="0"></Map>
           <MapToolbox @fullscreen="fullscreen"></MapToolbox>
           <Callbox :class="{hidedmenu}"></Callbox>
           <notice ></notice>
           <LeftToolbox @daiplate="cldaiplate" :style="{bottom:dmenuszie}"></LeftToolbox>
       </div>
       <div>
      
           <div class="left" :class="{hidedmenu}"><Lmenu :items='lmenuitems'></Lmenu></div>
           <div class="bottom"><Dmenu ref="dmenu"  @listenchange="listenchangeDmenu"></Dmenu></div>
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
           hidedmenu:false,
           dmenuszie: '260px !important', 
           lmenuitems: [
                        {label:'GPS控制',icon:'gps_fixed'},
                        {label:'历史轨迹',icon:'history'},
                        {label:'实时轨迹',icon:'navigation'},
                        {label:'锁定功能',icon:'vpn_lock'},
          ],
          isshowmini:false            
       }
    },
   mounted(){
      var _this = this;        
      document.onkeydown = function(e) {            
         if(document.activeElement.nodeName!='INPUT'){
             switch(window.event.key)
             {
                 case "0":
                 case "1":
                 case "2":
                 case "3":
                 case "4": 
                 case "5": 
                 case "6": 
                 case "7": 
                 case "8": 
                 case "9": 
                   _this.$refs.dmenu.changeshowtab(window.event.key,'拨号键盘');
                    break;
                default:
                    break;
             }         
          
         }
        };
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
        },
        cldaiplate:function(){  
              this.$refs.dmenu.changeshowtab('','拨号键盘');
        },
        handleClick:function(text){
            alert(text);
        },
        Bannerselectedchange:function(val){
            this.lmenuitems.splice(0)
           switch (val){
                case "infomanager":
                    this.lmenuitems.push( 
                            {label:'用户信息',icon:'person'},
                            {label:'设备信息',icon:'tap_and_play'},
                            {label:'编组信息',icon:'supervisor_account'},
                            {label:'单位信息',icon:'account_balance'},
                          ) ;
                 break;
               default:
                   this.lmenuitems.push( 
                            {label:'GPS控制',icon:'gps_fixed'},
                            {label:'历史轨迹',icon:'history'},
                            {label:'实时轨迹',icon:'navigation'},
                            {label:'锁定功能',icon:'vpn_lock'},
                         );  
                   break;
               
           }
        },
        fullscreen:function(){
            this.isshowmini=!this.isshowmini;
        }
       
    }
}
</script>
<style scoped>
  .map {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
  #main {
    width: 100%;
    height: 100%;
  }
  #main>div {
    width: 100%;
    height: 100%;
  }
  .top{
      position: relative;;
      top: 0;
      height: 58px !important;
      width: 100%;

      float: left;
      z-index: 2;
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
<style>
 .v-contextmenu--default,.v-contextmenu{
      background-color: #13204d!important;
     
  }
  .v-contextmenu-item,.v-contextmenu-divider{
    color:#fff!important;
  }
</style>