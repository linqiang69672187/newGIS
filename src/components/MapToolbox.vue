<template>
<div class="toolboxdiv">
    <div class="toolbox " >
        <ul>
            <li><a @click="showdistance($event)" ><div><i class="fas fa-ruler"></i></div></a></li>
            <li><a><div><i class="fas fa-map"></i></div></a></li>
            <li><a><div><i class="fas fa-object-ungroup"></i></div></a></li>
            <li><a><div><i class="fas fa-search-minus"></i></div></a></li>
            <li><a><div><i class="fas fa-search-plus"></i></div></a></li>           
        </ul>
    </div>
    <transition name='slide-fade' v-on:after-enter="afterEnter"  >
     <div  v-show="show" class="computedistance">
         <ul>
            <li><a><div><i class="fas fa-map"></i></div></a></li>
            <li><a><div><i class="fas fa-object-ungroup"></i></div></a></li>
         </ul>
     </div>
     </transition>
</div>
</template>
<script>
import func from '../../vue-temp/vue-editor-bridge';

export default {
    mounted(){
    },
    methods:{
        showdistance:function(ev){
              if (show){
                
              }
              show = !show
          },
         afterEnter: function (el) {
             el.style.zIndex=4
         },
         
    },
   data(){
       return{ 
           show: false             
       }
    },
}
</script>
<style scoped>
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
    .toolbox>ul>li:nth-child(2) div{
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
   
    }
</style>
