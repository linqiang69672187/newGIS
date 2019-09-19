<template>
  <div class="row" :class="{rowwidth}">
    <div :class="{lmenuicon}"> <ul>
            <li  @click="showtree=!showtree" :class="{ismenufaded,showtree}">
             <Tooltip :disabled="!minimenu"  content="用户列表" placement="right"> 
                <a ><i class="fas fa-list" ></i>
                <transition  @after-leave="afterfade" @before-enter="afterendfade" name="fade">
                <div v-if="!minimenu">用户列表</div>
                </transition>
                </a>
            </Tooltip>
            </li>
             <li  v-for="(item,key) in items" :key="key"  :class="{ismenufaded}">
             <Tooltip :disabled="!minimenu"  :content="item.label" placement="right"> 
                <a ><i class="fas fa-list" :class="item.icon" ></i>
                <transition  @after-leave="afterfade" @before-enter="afterendfade" name="fade">
                <div v-if="!minimenu">{{item.label}}</div>
                </transition>
                </a>
            </Tooltip>
            </li>
        </ul>
    </div>
    <div id="lmenu_2"  v-if="showtree" >
         <div>用户列表</div>
         <div><DagTree></DagTree></div>
    </div>
         <div  class="controlLmenu" :class="{lmenuicon}"><div @click="minimenu=!minimenu" :class="{rotationIcon}"><i class="fas fa-arrow-circle-left"></i></div></div>
   
  </div>
</template>

<script>
import {Tooltip} from 'iview'
import DagTree from "@/components/DagTree.vue"
export default {
    props:{items:Array},
    data () {
      return {
        minimenu: false,
        ismenufaded:false,
        lmenuicon:false,
        rowwidth:false,
        rotationIcon:false,
        showtree:false,
        
      }
    },
  
    components:{
      DagTree,
      Tooltip
  },
  computed: {
    classOismenufadedbject: function () {

    }
  },
  methods:{
    afterfade:function(el){
      this.ismenufaded=true;
      this.lmenuicon =true;
      this.rowwidth =true;
      this.rotationIcon=true;
    }, 
    afterendfade:function(el){
      this.ismenufaded=false;
      this.lmenuicon =false;
      this.rowwidth =false;
      this.rotationIcon=false;
    },
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body{
  margin: 0;
  padding: 0;
    
}
.row {
  height: 100%;
  width: 280px;
  color: #ffffff ;

  transition:width 2s;
  -moz-transition:width 2s; /* Firefox 4 */
  -webkit-transition:width 2s; /* Safari and Chrome */
  -o-transition:width 2s; /* Opera */
}
.row a{
  color: #ffffff ;
}
.row>div:nth-child(1) {
  height: 100%;
  background-color: #164B77;
  width: 80px;
  float: left;

  transition:width 2s;
  -moz-transition:width 2s; /* Firefox 4 */
  -webkit-transition:width 2s; /* Safari and Chrome */
  -o-transition:width 2s; /* Opera */
}
.row>div:nth-child(1) li{
   vertical-align: middle;
   height: 58px;
  cursor: pointer;
}
.row>div:nth-child(1) svg{
    font-size: 24px;  
    margin-top: 8px;
}
.showtree{
   vertical-align: middle;
   height: 58px;
   background-color: #2B81BE;
}
#lmenu_2{
  width: 200px;
  float: right;
  height: 100%;
  background-color: #ffffff;  
  box-shadow:2px 2px 2px  rgba(0, 0, 0, 0.2)!important;
}
#lmenu_2>div:nth-child(1){
    height: 30px;
    width: 100%;
    background-color: #2B81BE;
    line-height: 30px;
    text-align: left;
    padding-left: 15px;
}
#lmenu_2>div:nth-child(2){
     border-right:2px solid #164B77;
     height: 100%;
   
}
.controlLmenu{
  height: 80px;
  left: 0;
  z-index: 999;
  position: absolute;
  width: 80px;
  bottom: 0px;
  transition:width 2s;
  -moz-transition:width 2s; /* Firefox 4 */
  -webkit-transition:width 2s; /* Safari and Chrome */
  -o-transition:width 2s; /* Opera */
}
.controlLmenu div{
 position:absolute;
 left:0;
 bottom:0;
 width: 100%;
 height: 40px;
 font-size: 24px;
 line-height: 40px;
 cursor: pointer;
  transition:all 2s;
  -moz-transition:all 2s; /* Firefox 4 */
  -webkit-transition:all 2s; /* Safari and Chrome */
  -o-transition:all 2s; /* Opera */
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
 transform: scale(0);
 opacity: 0;
}
.ismenufaded{
  padding-top:10px;
}
.lmenuicon{
 width: 40px !important;
}
.rowwidth{
  width: 240px !important;
}
.rotationIcon{
  transform:rotate(180deg);
-ms-transform:rotate(180deg); 	/* IE 9 */
-moz-transform:rotate(180deg); 	/* Firefox */
-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
-o-transform:rotate(180deg); 	/* Opera */
}
.top,.bottom{
      text-align: center;
  }
  .center{
      width: 300px;
      margin: 10px auto;
      overflow: hidden;
  }
  .center-left{
      float: left;
  }
  .center-right{
      float: right;
  }
</style>
<style >
.ivu-tooltip-popper{
    left:37px !important;
  }
</style>
