<template>
<div class="toolboxdiv">
    <div class="toolbox " :class="{toolboxzindex:toolzindex}" >
        <ul>
            <li><a @click="showdistance" ><Tooltip content="测量" placement="bottom"> <div><i class="fas fa-ruler"></i></div></Tooltip></a></li>
            <li><a><Tooltip content="地图切换" placement="bottom"> <div><i class="fas fa-map"></i></div></Tooltip></a></li>
            <li><a @click="fullscreen"><Tooltip content="全屏" :class="[isshowmini?'hide':'']" placement="bottom"> <div><i class="fas fa-window-maximize"></i></div></Tooltip><Tooltip content="恢复" placement="bottom" :class="[isshowmini?'':'hide']"> <div><i class="fas fa-window-minimize"></i></div></Tooltip></a></li>
            <li><a><Tooltip content="缩小" placement="bottom"> <div><i class="fas fa-search-minus"></i></div></Tooltip></a></li>
            <li><a><Tooltip content="放大" placement="bottom"> <div><i class="fas fa-search-plus"></i></div></Tooltip></a></li>           
        </ul>
    </div>
    <transition name='slide-fade' v-on:before-enter="beforeEnter"  >
     <div  v-show="show" class="computedistance">
         <ul>
            
            <li><a>
                <Tooltip content="距离" placement="bottom"> 
                <div><i class="fas fa-map-pin"></i></div>
                </Tooltip>
                </a></li>
            

            <li><a>
                <Tooltip content="面积" placement="bottom"> 
                <div><i class="fas fa-object-ungroup"></i></div>
                  </Tooltip>
                </a></li>
         </ul>
     </div>
     </transition>
</div>
</template>
<script>
import {Tooltip} from 'iview'
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
         }
         
    },  
    components:{
           Tooltip
         },
   data(){
       return{ 
           show: false ,
           toolzindex:false,
           isshowmini:false           
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
   ul>li div{
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
    
</style>
