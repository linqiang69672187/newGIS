<template>
  <div class="row">
    <div>东方通信GIS指挥调度台</div>
    <div>
        <ul>
            <li><a><i class="fas fa-headphones"></i><div>调度功能</div></a></li>
            <li><a><i class="fas fa-address-card"></i><div>信息管理</div></a></li>
            <li><a><i class="fas fa-cogs"></i><div>参数设置</div></a></li>
            <li><a><i class="fas fa-question-circle"></i><div>帮助</div></a></li>
            <li><a><i class="fas fa-door-open"></i><div>结束系统</div></a></li>
        </ul>
    </div>
    <div>
        <ul>
            <li><a>
              <Badge  :count="3">
                 <i class="fas fa-bell"></i>
              </Badge></a></li>
            <li><a><div>张警官</div></a></li>
        </ul>
    </div>
  </div>
</template>

<script>
import { Badge  } from 'iview';
export default {
    data () {
      return {
        msg: "1"
      }
    },
    components:{
      Badge
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body{
  margin: 0;
  padding: 0;
  
}
h1, h2 {
  font-weight: normal;
}
.row {
  height: 58px;
  background-color: #164B77;
  color: #ffffff ;
}
.row a{
  color: #ffffff ;
}
.row>div:nth-child(1) {
    float: left;
    width:240px;
    height: 58px;
    line-height: 58px;
    font-size: 18px;
    background-color: #042657;
}

.row>div:nth-child(2) {
    float: left;
    width: calc(100% - 720px);
}
.row>div:nth-child(2) svg {
   display: block !important;
   margin-left: 28px;
   margin-top: 10px;
   font-size: 24px;
}
.row>div:nth-child(2) div {
   
   margin-top: -15px;
   width: 80px;
   text-align: center;
}
.row>div:nth-child(3) {
    float: right;
    width:120px;
}
ul {
  list-style-type: none;
  padding: 0;
  height: 58px;
}
.row>div:nth-child(2) li {
  
  margin: 0 0px;
  height: 100%;
  float: left;
  list-style-type: none;
  position: relative;
  display: list-item;
  width: 80px;
  vertical-align: middle;
  text-align: center;
  line-height: 58px;
}
a {
  color: #42b983;
}
.row>div:nth-child(2) ul>li:nth-child(1){
  background-color:#2B81BE;
}
.row>div:nth-child(3) li {
  margin: 0 0px;
  float: left;
  list-style-type: none;
  display: list-item;
}
.row>div:nth-child(3) li:nth-child(1) {
 width: 40px;
 margin-top: 25px;
 font-size: 22px;
}
.row>div:nth-child(3) li:nth-child(2) {
 margin-top: 35px;
  font-size: 14px;
}

</style>
