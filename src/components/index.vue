<template>
    <div id="main">
   
        <OCX></OCX>
           <!-- <v-contextmenu ref="contextmenu" >
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
        -->
      <div class="top" ><banner ref="banner" :isshowmini="isshowmini" @Bannerselectedchange='Bannerselectedchange'></banner></div>
       <div>
           <div  id="map"></div>
           <MapToolbox ref="maptoolbox" @fullscreen="fullscreen"></MapToolbox>
           <!--<Map  class="map" v-contextmenu:contextmenu move-type="0"></Map>
            <Callbox :class="{hidedmenu}"></Callbox> 地图上呼叫按钮-->
           <notice ref="notice"></notice>
           <LeftToolbox ref="leftToolbox" @daiplate="cldaiplate" :style="{bottom:dmenuszie}"></LeftToolbox>
       </div>
       <div>
      
           <div class="left" :class="{hidedmenu}"><Lmenu  ref="lmenu"  :items='lmenuitems'></Lmenu></div>
           <div class="bottom"><Dmenu ref="dmenu" :ocxRegStatus="ocxRegStatus" @downloadover="downloadover"  @listenchange="listenchangeDmenu"></Dmenu></div>
       </div>
      
    </div>
</template>
<script>
import banner from "@/components/banner"

import Lmenu from "@/components/Lmenu"
import Dmenu from "@/components/Dmenu"
import MapToolbox from "@/components/MapToolbox"
import Callbox from "@/components/control/CallBox"
import notice from "@/components/control/notices"
import LeftToolbox from "@/components/control/LeftToolbox"
import OCX from "@/components/OCX"
import languageset from '@/mixin/languageset'

export default {
    data(){
       return{
           hidedmenu:false,
           dmenuszie: '260px !important', 
           lmenuitems:[],
           lmenuitems1:[
                        {label:'操作窗口',icon:'gps_fixed',name:'hjmb',enable:true},
                        {label:'GPS上报',icon:'history',name:'gpslist',enable:true},
                        {label:'GPS上拉',icon:'navigation',name:'GPSPullList',enable:true},
                        {label:'短信',icon:'mail_outline',name:'sms_sjx',enable:true},
                        {label:'操作日志',icon:'event_note',name:'operationlog',enable:true},
                        {label:'动态重组',icon:'group_add',name:'dtczrestlt',enable:true},
            ],
            lmenuitems2:[
                        {label:'GPS上报统计',icon:'insert_chart',name:'Lang_gpstj',enable:true},
                        {label:'单键报备统计',icon:'equalizer',name:'Lang_djbbtj',enable:true},
                        {label:'人员设备管理',icon:'supervisor_account',name:'Lang_UserDeviceManage',enable:true},
                        {label:'GPS数据管理',icon:'assignment',name:'Lang_GPSDataManage',enable:true},
                        {label:'预案管理',icon:'build',name:'Lang_emergency',enable:true},
                        {label:'实时警力',icon:'alarm_add',name:'Lang_RealTimePoliceStrength',enable:true}
            ],
              
        isshowmini:false,
        ocxRegStatus:true, 
        DTCZEnable:true,   //动态重组权限
        SMSEnable:true,    //短信权限
        PullUp_ControlEnable:true, //GPS上拉权限
        GPS_ControlEnable:true,    //GPS上报权限
        loadingvue:null,       
       }
    },
   mixins:[languageset,],
   created(){
          this.loadingvue = this.$loading({
              text: 'loading',
            
            });
   },
   mounted(){
      var _this = this;  
      window.vue_index= this;
      
        for (let i = 0; i < this.lmenuitems1.length; i++) { 
          _this.lmenuitems.push(_this.lmenuitems1[i]) 
         };                
                        
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
               
                   _this.$refs.dmenu.changeshowtab(window.event.key,'dialplate');
                 
                    break;
                case "l":
                   _this.$refs.dmenu.changeshowtab('','eyemaps');
                    break;
                case "r":
                   _this.$refs.dmenu.changeshowtab('','realtime');
                    break; 
                case "b":
                 _this.$refs.dmenu.changeshowtab('','basestationchart');
                    break;  
                case "s":
                 _this.$refs.leftToolbox.select_rangle();
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
        OCX,
        Lmenu,
        Dmenu,
        MapToolbox,
        Callbox,
        notice,
        LeftToolbox,
    },
    methods:{
        downloadover:function(type,msg){
            
             switch(type){
                 case "error":
                      this.$refs.notice.error(type,msg);
                     break;
                 case "success":
                     this.$refs.notice.info(type,msg);
                     break;
                 default:
                     break;
             }
            

             },
        increase:function(val){
        },
        listenchangeDmenu:function(isshow){
           this.hidedmenu=!isshow;
           (isshow)?this.dmenuszie='260px !important':this.dmenuszie='10px !important'
          // console.info(isshow+this.dmenuszie)
        },
        cldaiplate:function(){  
              this.$refs.dmenu.changeshowtab('','dialplate');
        },
        handleClick:function(text){
            alert(text);
        },
        Bannerselectedchange:function(val){
         console.info(val);
           switch (val){
               case "exit":
                   loginout();//调用原系统退出
                   break;
               case "options":
                   openwindows("options");//调用原系统
                   break;
                case "servicemanager":
                    this.lmenuitems.splice(0);
                    for (let i = 0; i < this.lmenuitems1.length; i++) { 
                    this.lmenuitems.push(this.lmenuitems2[i]) 
                    };      
                 break;
            case "help":
                         break;
               default:
                   this.lmenuitems.splice(0);
                     for (let i = 0; i < this.lmenuitems1.length; i++) { 
                    this.lmenuitems.push(this.lmenuitems1[i]) 
                    };    
                            
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
           
        },
        regmsg:function(msg,dispName){
            switch (msg) {
                case "REG_SUCCESS":
                case "“LINK_SUCCESS":    
                    this.ocxRegStatus=true;
            
                    break;
                case "REG_FAIL":
                case "LINK_DISCONNECT":   
                      this.ocxRegStatus=false;
             
                    break;
                default:
                    break;
            }
        },
        updateuseprameters(){
            if (useprameters.DTCZEnable=='0'){  //动态重组
            this.$set(this.lmenuitems1[5], 'enable', false);
            this.DTCZEnable=false;
            }

            if (useprameters.GPS_ControlEnable=='0'){  //GPS上报
            this.$set(this.lmenuitems1[1], 'enable', false);
            this.GPS_ControlEnable=false;
            }
            if (useprameters.PullUp_ControlEnable=='0'){  //GPS上拉
            this.$set(this.lmenuitems1[2], 'enable', false);
            this.PullUp_ControlEnable=false;
            }
            if (useprameters.SMSEnable=='0'){  //短信 
            this.$set(this.lmenuitems1[3], 'enable', false);
            this.SMSEnable=false;
            } 
         },
        setlanguage(){
             this.lmenuitems.splice(0);
             this.lmenuitems1.splice(0);
             this.lmenuitems2.splice(0);

             let czck=GetTextByName("Lang_Callpanel");//操作窗口
             let gpssb = GetTextByName("Lang_GPS_Control");//GPS上报Lang_GPS_Control
             let gpssl = GetTextByName("Lang_GPS_Pull");
             let SMS = GetTextByName("SMS");
             let czrz = GetTextByName("operLog_Menu");
             let dtcz = GetTextByName("Lang_DTCZ");

             let gpssbtj = GetTextByName("Lang_gpstj");
             let djbbtj = GetTextByName("Lang_djbbtj");
             let rysbgl = GetTextByName("Lang_UserDeviceManage");
             let gpssjgl = GetTextByName("Lang_GPSDataManage");  
             let yagl = GetTextByName("Lang_emergency"); 
             let ssjl = GetTextByName("Lang_RealTimePoliceStrength"); 

                // DTCZEnable:true,   //动态重组权限
                // SMSEnable:true,    //短信权限
                // PullUp_ControlEnable:true, //GPS上拉权限
                // GPS_ControlEnable:true,    //GPS上报权限  
             this.lmenuitems1.push(
                 {label:czck,icon:'gps_fixed',name:'hjmb',enable:true},
                 {label:gpssb,icon:'history',name:'gpslist',enable:this.GPS_ControlEnable},
                 {label:gpssl,icon:'navigation',name:'GPSPullList',enable:this.PullUp_ControlEnable},
                 {label:SMS,icon:'mail_outline',name:'sms_sjx',enable:this.SMSEnable},
                 {label:czrz,icon:'event_note',name:'operationlog',enable:true},
                 {label:dtcz,icon:'group_add',name:'dtczrestlt',enable:this.DTCZEnable});

             this.lmenuitems.push(
                 {label:czck,icon:'gps_fixed',name:'hjmb',enable:true},
                 {label:gpssb,icon:'history',name:'gpslist',enable:this.GPS_ControlEnable},
                 {label:gpssl,icon:'navigation',name:'GPSPullList',enable:this.PullUp_ControlEnable},
                 {label:SMS,icon:'mail_outline',name:'sms_sjx',enable:this.SMSEnable},
                 {label:czrz,icon:'event_note',name:'operationlog',enable:true},
                 {label:dtcz,icon:'group_add',name:'dtczrestlt',enable:this.DTCZEnable});

             this.lmenuitems2.push(
                {label:gpssbtj,icon:'insert_chart',name:'Lang_gpstj',enable:true},
                {label:djbbtj,icon:'equalizer',name:'Lang_djbbtj',enable:true},
                {label:rysbgl,icon:'supervisor_account',name:'Lang_UserDeviceManage',enable:true},
                {label:gpssjgl,icon:'assignment',name:'Lang_GPSDataManage',enable:true},
                {label:yagl,icon:'build',name:'Lang_emergency',enable:true},
                {label:ssjl,icon:'alarm_add',name:'Lang_RealTimePoliceStrength',enable:true});
        },
        init:function(){
            this.$refs.banner.updateuseprameters();
            this.$refs.dmenu.updateuseprameters();
            this.$refs.leftToolbox.updateuseprameters();
            this.updateuseprameters();
            this.loadingvue.close();
            if (this.get_language()!='zh-CN'){
                this.setlanguage();
                this.$refs.banner.setlanguage();
                this.$refs.dmenu.setlanguage();
                this.$refs.maptoolbox.setlanguage();
                this.$refs.leftToolbox.setlanguage();
                this.$refs.lmenu.setlanguage();
            }
        }
       
    }
}
</script>
<style scoped>
  #map {
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
      right: 10px;
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