<template>
<div class="row">
    <div><Tabs class="tabs" type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="实时状况" class="tabpane" v-if="tab1" icon="logo-windows"><tabindex></tabindex></TabPane>
        <TabPane  class="tabpane" label="macOS" v-if="tab0" icon="ios-key">
           
        </TabPane>
        <TabPane class="tabpane"  label="Windows" v-if="tab1" icon="logo-windows">标签二的内容</TabPane>
        <TabPane class="tabpane"  label="Linux" v-if="tab2" icon="logo-tux">标签三的内容</TabPane>
    </Tabs>
    </div>
</div>
</template>
<script>
import { Tabs,TabPane  } from 'iview';
import tabindex from "@/components/tabs/index"
    export default {
        data () {
                return {
                        tab0: true,
                        tab1: true,
                        tab2: true,
                    }
        },
        components:{
          Tabs,
          TabPane, 
          tabindex
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
height: 250px;

background-color: #164B77;
}
.paging{
      float:right;
      margin-top:10px;
  }
  .tabpane{
      background-color: #fff;
  }
.row>div:nth-child(1){
width:100%;
float: left;
height: 250px;
position:absolute;
}
.row>div:nth-child(2){
width: 400px;
float: right;
border-top: 1px solid #dcdee2;
margin-top: 31px;
padding-left: 5px;
height: 100%;
background-color: #fff;
}
.row>div:nth-child(2) tr{
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
        height: 1px;
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
</style>