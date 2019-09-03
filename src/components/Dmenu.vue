<template>
<div class="row" @mouseleave="show=false" @mouseenter="show=true" >
   <div  class="controlmenu"><ul v-show="show"><li><i class="fas fa-sort-down"></i></li><li></li><li><i class="fas fa-sort-down"></i></li></ul></div>
    <div><Tabs class="tabs" type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="实时状况" class="tabpane" v-if="tab1" icon="logo-windows"><tabindex></tabindex></TabPane>
        <TabPane class="tabpane" label="GPS控制" v-if="tab0" icon="ios-key"></TabPane>
        <TabPane class="tabpane"  label="鸟览图" v-if="tab1" icon="logo-windows"><eyemaps></eyemaps></TabPane>
        <TabPane class="tabpane"  label="视频窗口" v-if="tab2" icon="logo-tux"><videos></videos></TabPane>
    </Tabs>
    </div>
</div>

</template>
<script>
import { Tabs,TabPane  } from 'iview';
import tabindex from "@/components/tabs/index"
import videos from "@/components/tabs/videplayer"
import eyemaps from "@/components/tabs/eyemaps"
    export default {
        data () {
                return {
                        tab0: true,
                        tab1: true,
                        tab2: true,
                         show: false ,
                    }
        },
        components:{
          Tabs,
          TabPane, 
          tabindex,
          videos,
          eyemaps
        },
        methods: {
              handleTabRemove (name) {
                this['tab' + name] = false;
            },
           
        },
        created(){
        },
        mounted() {
       },
       
    }
</script>
<style scoped>
.row{
margin: 0px;
width: 100%;
height: 265px;


}
.controlmenu{
width: 100%;
height: 15px;
}
.controlmenu ul{
 width: 180px;
 height: 15px;
 margin: 0 auto;
 background-color: #164B77;
 display:inline-block;
 list-style: none;
 color: #fff;
 font-size: 22px;
 line-height: 15px;
 opacity: 0.6;
 cursor: pointer;
}
.controlmenu ul li{
    float: left;
    margin-top: -8px

}
.controlmenu ul li:nth-child(3){
    float: right;
}
.paging{
      float:right;
      margin-top:10px;
  }
  .tabpane{
      background-color: #fff;
  }
.row>div:nth-child(2){
width:100%;
float: left;
height: 250px;
position:absolute;
background-color: #164B77;
}
.row>div:nth-child(3){
width: 400px;
float: right;
border-top: 1px solid #dcdee2;
margin-top: 31px;
padding-left: 5px;
height: 100%;
background-color: #fff;
}
.row>div:nth-child(3) tr{
height: 18px;
}
.ivu-tabs{
    height: 250px;
    width: 100%;
}
.calltable{
    height: 183px;
}
.tabs .ivu-tabs-tab{
 border: 0;
}
 
</style>
<style >
.tabs .ivu-tabs-tab{
 border: 0 !important;
 background-color: transparent !important;
 color: #fff !important;

}
.ivu-tabs-bar {
    border: 0 !important;
}
.tabs .ivu-tabs-tab-focused{

 background-color: #fff !important;
 color: #164B77 !important;
}

*::-webkit-scrollbar {/*滚动条整体样式*/
        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 10px;
    }
*::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #535353;
    }
*::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
   .calltable th,.calltable td{
    height: 30px !important;
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
    transition: all 1s ease;
    }
    .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    opacity: 0.6;
    }
    .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
     
    }
</style>