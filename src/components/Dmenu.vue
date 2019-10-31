<template>
<div class="row"  @mouseenter="downrowshow=true" @mouseleave="downrowshow=false" :class="{showdmenu}" >
   <div  class="controlmenu" :class="{rationicon}"><ul :class="{downrowshow}" @click="leave" ><li ><i class="fas fa-sort-down" ></i></li><li></li><li><i class="fas fa-sort-down" ></i></li></ul></div>
  
    <div >
    <Tabs class='tabs' @on-click='tabclick' v-model='tabname' name='plane'   @on-tab-remove='handleTabRemove' type='card'  >
        <TabPane  tab="plane"  name="实时状况" label="实时状况" class="tabpane" icon="ios-speedometer"><tabindex @downloadover="downloadover"></tabindex></TabPane>
        <!-- <TabPane  tab="plane" name="GPS控制" class="tabpane" label="GPS控制"  icon="ios-key"><GPScontrol></GPScontrol></TabPane> -->
        <TabPane    tab="plane" name="拨号键盘"   class="tabpane"  label="拨号键盘"  icon="ios-apps"><dialplate :ocxRegStatus="ocxRegStatus" ref="dail"></dialplate></TabPane>
        <TabPane  tab="plane" name="基站统计"   class="tabpane"  label="基站统计"  icon="ios-stats"><basestationchart></basestationchart></TabPane>
        <TabPane  tab="plane" closable name="锁定跟踪" class="tabpane"  label="锁定跟踪" v-if="showlockTab" icon="ios-lock"><eyemaps></eyemaps></TabPane>
    </Tabs>
    </div>
     <div class="navcationx"></div>
</div>

</template>
<script>
import { Tabs,TabPane  } from 'iview';
import tabindex from "@/components/tabs/index"
import videos from "@/components/tabs/videplayer"
import eyemaps from "@/components/tabs/eyemaps"
import dialplate from "@/components/tabs/dialplate"
import GPScontrol from "@/components/tabs/GPScontrol"
import basestationchart from "@/components/tabs/basestationchart"

    export default {
        data () {
                return {
                        showlockTab:false,
                        show: false,
                        showdmenu:true,
                        rationicon:true,
                        tabname:'实时状况',
                        dailval:'',
                        downrowshow:false,
                        
                    }
        },
        components:{
          Tabs,
          TabPane, 
          tabindex,
          videos,
          eyemaps,
          dialplate,
          GPScontrol,
          basestationchart
        },
        props:['ocxRegStatus'],
        methods: {
              downloadover(type,msg){
                 
                    this.$emit("downloadover",type,msg);     
              },
              handleTabRemove (name) {
                switch (name) {
                    case '锁定跟踪':
                        
                        this.showlockTab=false;
                       
                        break;
                
                    default:
                        break;
                }
            },
            leave(el){ 
                this.showdmenu=!this.showdmenu;
                this.rationicon=!this.rationicon;
                this.$emit("listenchange",this.showdmenu);                   
            },
            hide(isshow){
              
                 this.showdmenu=isshow;
                 this.rationicon=isshow;
                 this.$emit("listenchange",this.showdmenu);  
            },
            changeshowtab(key,tabs){
                console.info(tabs);
                switch (tabs) {
                    case '锁定跟踪':
                        this.showlockTab=true;
                        break;
                
                    default:
                        break;
                }
                this.showdmenu=true;
                this.rationicon=true;
                this.$emit("listenchange",this.showdmenu); 
               
         
              if(this.tabname!=tabs){
                  this.tabname=tabs;  
                }
                 this.tabclick();
               
            },
            tabclick(){
                if (this.tabname=="拨号键盘"){
                this.$refs.dail.sendparentvalue('');
                return;
                }
                this.$refs.dail.hidetab();
            }
           
        },
        created(){
        },
        mounted() {
            
       },
       computed:{
       
     
    }
       
    }
</script>
<style scoped>
.row{
margin: 0px;
width: 100%;
height: 15px;
  transition:all 0.6s;
  -moz-transition:all 0.6s; /* Firefox 4 */
  -webkit-transition:all 0.6s; /* Safari and Chrome */
  -o-transition:all 0.6s; /* Opera */

}
.controlmenu{
width: 100%;
height: 15px;
}
.downrowshow{
    opacity: 1 !important;
}
.controlmenu ul{
 width: 180px;
 height: 15px;
 margin: 0 auto;
 background-color: #164B77;
 display:inline-block;
 border-top-left-radius: 5px;
 border-top-right-radius: 5px;
 list-style: none;
 color: #fff;
 font-size: 22px;
 line-height: 15px;
 opacity: 0.3;
 cursor: pointer;
}
.controlmenu ul li:nth-child(1){
    float: left;
    margin-left: 5px;
    margin-top: -8px

}
.controlmenu ul li:nth-child(3){
    float: right;
    margin-right: 5px;
    margin-top: -8px
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
.showdmenu{
 height: 265px !important;
}
.controlmenu  i{
  transition:all 0.6;
  -moz-transition:all 0.6s; /* Firefox 4 */
  -webkit-transition:all 0.6s; /* Safari and Chrome */
  -o-transition:all 0.6s; /* Opera */
}
.rationicon li{
transform:rotate(180deg);
-ms-transform:rotate(180deg); 	/* IE 9 */
-moz-transform:rotate(180deg); 	/* Firefox */
-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
-o-transform:rotate(180deg); 	/* Opera */

}
.rationicon li{
    margin-top: 2px !important;
}

 .ivu-tabs{
     overflow: visible !important;
 }
 .navcationx{
     position: absolute;
     width: 30px !important;
     height: 30px !important;
    background-color: transparent;
     right: 0px;
     top:15px;
     color: #333;
     font-size: 20px;
     cursor: pointer;
 }
  .navcationx:hover{
      color: #fff;
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
  .ivu-tabs-close{
      color: #fff !important;
  }
  .ivu-tabs-tab-active  .ivu-tabs-close{
           color: #000 !important; 
  }
  .ivu-tabs-close:hover{
     
      border-radius: 50%;
      background-color: #ED4014;
  }
</style>