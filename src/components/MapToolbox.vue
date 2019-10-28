<template>
<div class="toolboxdiv">
    <div class="toolbox " :class="{toolboxzindex:toolzindex}" >
        <ul>
            <li><a id="ol-ranging" @click="showdistance" ><Tooltip content="测量" placement="bottom"> <div><i class="fas fa-ruler"></i></div></Tooltip></a></li>
            <li><a>
                <Poptip trigger="click" width="120"  placement="bottom">
                     <Tooltip content="图层控制" placement="bottom"><div><i class="fas fa-map"></i></div></Tooltip>
                     <div class="api" slot="content">
                         <div>
                             图层控制
                         </div>
                        <ul>
                            <li> 
                                 <div>
                                    <div class="left">基 站：</div> 
                                    <div class="right">
                                    <i-switch  @on-change="BSchange" v-model="basestationStatus"   size="large">
                                        <span slot="open">开启</span>
                                        <span slot="close">关闭</span>
                                    </i-switch>
                                    </div>
                                 </div>
                            </li>
                            <li>
                                 <div>
                                    <div class="left">单 位：</div> 
                                    <div class="right">
                                    <i-switch @on-change="Entitychange"  v-model="entityStatus"  size="large">
                                        <span slot="open">开启</span>
                                        <span slot="close">关闭</span>
                                    </i-switch>
                                 </div>
                                 </div>
                            </li>
                            <li>
                                <div>
                                 <div class="left">用 户：</div> 
                                    <div class="right">
                                    <i-switch  @on-change="Userchange"  v-model="userStatus"  size="large">
                                        <span slot="open">开启</span>
                                        <span slot="close">关闭</span>
                                    </i-switch>
                                    </div>
                                </div>
                            </li>
                        </ul>
                     </div>
                </Poptip >
            </a></li>
            <li><a @click="fullscreen"><Tooltip content="全屏" :class="[isshowmini?'hide':'']" placement="bottom"> <div><i class="fas fa-window-maximize"></i></div></Tooltip><Tooltip content="恢复" placement="bottom" :class="[isshowmini?'':'hide']"> <div><i class="fas fa-window-minimize"></i></div></Tooltip></a></li>
            <li><a @click="zoomOut"><Tooltip content="缩小" placement="bottom"> <div><i class="fas fa-search-minus"></i></div></Tooltip></a></li>
            <li><a @click="zoomIn"><Tooltip content="放大" placement="bottom"> <div><i class="fas fa-search-plus"></i></div></Tooltip></a></li>           
        </ul>
    </div>
    <transition name='slide-fade' v-on:before-enter="beforeEnter"  >
     
        <div  v-show="show" class="computedistance">
            <ul>
                
                <li>
                    <a id="BoxSelection-type1">
                         
                            <Tooltip content="距离" placement="bottom"> 
                            <div><i class="fas fa-map-pin"></i></div>
                            </Tooltip>
                         
                    </a>
                    </li>
                

                <li><a id="BoxSelection-type2">
                   
                        <Tooltip content="面积" placement="bottom"> 
                        <div><i class="fas fa-object-ungroup"></i></div>
                        </Tooltip>
                  
                    </a></li>
            </ul>
            <div id="mouse-position" class="measurevalue"></div>
        </div>
 
     </transition>
</div>
</template>
<script>
import Vue from 'vue'
import { Switch } from 'iview'
Vue.component('i-switch', Switch)
import {Tooltip,Poptip,Checkbox } from 'iview'
export default {
    mounted(){
    },
    methods:{
        showdistance:function(){
              this.show = !this.show
              if (!this.show){ 
                this.toolzindex=true; 
              }
             
          },
         beforeEnter: function (el) {
              this.toolzindex=true;
         },
         fullscreen:function(){
             this.isshowmini=!this.isshowmini;
             this.$emit("fullscreen");  
         },
         BSchange:function(){
             layershowControl('bsLayer',this.basestationStatus);
         },
         Entitychange:function(){
             layershowControl('entityLayer',this.entityStatus);
        },
         Userchange:function(){
             layershowControl('userLayer',this.userStatus);
        },
        zoomOut:function(){
            let loadevent = LoadEvents("zoomOut");
            loadevent();//调用原来缩小
        },
        zoomIn:function(){
            let loadevent = LoadEvents("zoomIn");
            loadevent();//调用原来放大
        } 
    },  
    components:{
           Tooltip,
           Poptip,
           Switch,
           Checkbox
         },
   data(){
       return{ 
           show: false ,
           toolzindex:false,
           isshowmini:false,
           basestationStatus:true,
           entityStatus:true,
           userStatus:true,           
       }
    },
}
</script>
<style scoped>
    .hide{
        display: none;
    }
    .toolboxdiv{
        height: 400px;
        width: 500px;
    }
    .computedistance{
        height: 36px;
        width: 80px;
        background-color: #164b77;
        border-top-left-radius:18px 18px;
        border-bottom-left-radius:18px 18px;
        font-size: 18px;
        line-height: 36px;
        position:absolute;
        top:0px;
        left: 85px;
        z-index: 2;
    }
    .toolbox{
        height: 36px;
        width: 210px;
        background-color: #164b77;
        border-radius: 18px;
        font-size: 18px;
        line-height: 36px;
        left: 145px;
        position:absolute;
        z-index: 3;
    }
    .toolboxzindex{
        z-index: 1;
    }
    ul,ul>li{
        display: inline-block;
    }

    .toolbox>ul>li{
        width: 32px;
        height: 32px;
    }
    .toolbox>ul>li>div{
        width: 32px;
        height: 32px;
        line-height: 32px;
    }

  
  
   ul>li a{
      color: #fff;
    }
    .focus{
      background-color: #fff;
      color: #164b77;
      border-radius: 16px;
      height: 32px;
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
    transition: all .5s ease;
    }
    .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(70px);
   opacity: 0;
    }
    .api {
     color:#515a6e;
    font-size: 14px;
    }
    .api li{
        display: block;
        height: 26px;
        line-height: 26px;
    }
    .api>div{
      text-align: left;
      border-bottom:1px solid #999999
    }
    .left{
        float: left;
        width: calc(100% - 50px);
        text-align: right;
    }
    .right{
        float: right;
          width: 50px;
    }
    .computedistance li:nth-child(2){
        margin-right: -10px;
        margin-left: 5px;
    }
    .measurevalue{
       height: 22px;
       background-color:  rgba(255,255,255,0.8);
       border-radius: 3px;
       font-size: 14px;
       color: #515a6e;
       line-height: 22px;
       margin-top: 5px;
    }
</style>
<style >
.ivu-poptip-body {
    padding: 8px 8px;
}
</style>