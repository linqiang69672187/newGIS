<template>
  <div class="row">
    <div> <ul>
            <li><a><i class="fas fa-list"></i><div>用户列表</div></a></li>
            <li><a><i class="fas fa-globe"></i><div>GPS上报</div></a></li>
            <li><a><i class="fas fa-street-view"></i><div>GPS上拉</div></a></li>
            <li><a><i class="fas fa-map-marker"></i><div>历史轨迹</div></a></li>
            <li><a><i class="fas fa-map"></i><div>实时轨迹</div></a></li>
            <li><a><i class="fas fa-crosshairs"></i><div>锁定功能</div></a></li>
        </ul>
    </div>
    <div id="lmenu_2">
         <div>用户列表</div>
         <div><DagTree></DagTree></div>
    </div>
         <div  class="controlLmenu"><ul ><li><i class="fas fa-caret-left"></i></li><li></li><li><i class="fas fa-caret-left"></i></li></ul></div>
   
  </div>
</template>

<script>

import DagTree from "@/components/DagTree.vue"
export default {
    data () {
      return {
        msg: "1"
      }
    },
    components:{
      DagTree
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
}
.row a{
  color: #ffffff ;
}
.row>div:nth-child(1) {
  height: 100%;
  background-color: #164B77;
  width: 80px;
  float: left;
  box-shadow: 0 0 15px #000;
}
.row>div:nth-child(1) li{
   vertical-align: middle;
   height: 58px;
  
}
.row>div:nth-child(1) svg{
    font-size: 24px;  
    margin-top: 8px;
}
.row>div:nth-child(1) li:nth-child(1){
   vertical-align: middle;
   height: 58px;
   background-color: #2B81BE;
}
#lmenu_2{
    width: 200px;
     float: right;
     height: 100%;
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
     padding-top: 5px;
}
.controlLmenu{
  height: 100%;
  width: 15px;
  z-index: 999;
  position: absolute;
  left: 80px;
display: flex;
align-items: center;
}
.controlLmenu ul{
  height:180px;
  width: 15px;
 background-color: #164B77;
 display:block;
 opacity: 0.6;
 list-style-type: none;
 font-size: 20px;
}
.controlLmenu ul li:nth-child(2){
height: 125px;
}
</style>
