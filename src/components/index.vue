<template>
    <div id="main">
        <OCX></OCX>
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
           <!-- <Callbox :class="{hidedmenu}"></Callbox> 地图上呼叫按钮-->
           <notice ref="notice"></notice>
           <LeftToolbox @daiplate="cldaiplate" :style="{bottom:dmenuszie}"></LeftToolbox>
       </div>
       <div>
      
           <div class="left" :class="{hidedmenu}"><Lmenu  ref="lmenu"  :items='lmenuitems'></Lmenu></div>
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
import OCX from "@/components/OCX"


export default {
    data(){
       return{
           hidedmenu:false,
           dmenuszie: '260px !important', 
           lmenuitems: [
                        {label:'操作窗口',icon:'gps_fixed',name:'oper_window'},
                        {label:'GPS上报',icon:'history',name:'gps_report'},
                        {label:'GPS上拉',icon:'navigation',name:'gps_pull'},
                        {label:'短信',icon:'vpn_lock',name:'sms'},
                        {label:'操作日志',icon:'vpn_lock',name:'oper_log'},
                        {label:'动态重组',icon:'vpn_lock',name:'dynamic_reconfiguration'},
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
        OCX,
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
         
           switch (val){
               case "edits":
                   openwindows("edits");
                   break;
                case "servicemanager":
                    this.lmenuitems.splice(0);
                    this.lmenuitems.push( 
                            {label:'GPS上报统计',icon:'person',name:'gps_statistics'},
                            {label:'单键报备统计',icon:'tap_and_play',name:'report_statistics'},
                            {label:'人员设备管理',icon:'supervisor_account',name:'users_statistics'},
                            {label:'GPS数据管理',icon:'account_balance',name:'gps_manager'},
                            {label:'预案管理',icon:'account_balance',name:'plan_manager'},
                            {label:'实时警力',icon:'account_balance',name:'realtime_polices'},
                          );
                 break;
               default:
                   this.lmenuitems.splice(0);
                   this.lmenuitems.push( 
                            {label:'操作窗口',icon:'gps_fixed',name:'oper_window'},
                            {label:'GPS上报',icon:'history',name:'gps_report'},
                            {label:'GPS上拉',icon:'navigation',name:'gps_pull'},
                            {label:'短信',icon:'vpn_lock',name:'sms'},
                            {label:'操作日志',icon:'vpn_lock',name:'oper_log'},
                            {label:'动态重组',icon:'vpn_lock',name:'dynamic_reconfiguration'},
                         );  
                   break;             
           }   
        },
        fullscreen:function(){
            this.isshowmini=!this.isshowmini;
            if (this.isshowmini==true){
            this.$refs.dmenu.hide(false);
            this.$refs.lmenu.fullscreen();
            }
            else
            {
           this.$refs.dmenu.hide(true);
            this.$refs.lmenu.exitfullscreen(); 
            }
           
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