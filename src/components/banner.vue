<template>
  <div class="banner">
    <div class="row"  >
      <div class="logo">
        <div>LDS2000</div>
        <div><ul>
            <li>单兵和车辆定位</li>
            <li>指挥调度系统</li>
        </ul></div>
        </div>
      <div class="menu" :class="[isshowmini?'animated bounceOutRight':'',isshowmini==false?'animated bounceInRight':'']">
      <div>
          <ul>
              <li v-for="(item,key) in items" @click="menuclk(item.name)" :key="key" :class="[(item.name==selectitem)?'selectitem':'']"><a><i class="fas " :class="item.icon"></i><div>{{item.label}}</div></a></li>
          </ul>
      </div>
      <div>
          <ul>
              <li><a>
                
                <Badge  :count="2">
                  <i class="fas fa-phone"></i>
                </Badge>
            
                </a></li>
                <li><a>
                <Badge  :count="3">
                  <i class="fas fa-envelope"></i>
                </Badge></a></li>
              <li><a><div>张警官</div></a></li>
          </ul>
      </div>
      <div class="changewindows"></div>
      </div>
    </div>
  <div class="trangle" @click="isshowmini=!isshowmini" :class="[isshowmini?'animated bounceInLeft':'',isshowmini==false?'animated bounceOutLeft':'']"></div>
  </div>
</template>

<script>
import { Badge  } from 'iview';
export default {
    data () {
      return {  
        items:[
          {name:'dispatchFunction',label:'调度功能',icon:'fa-headphones'},
          {name:'infomanager',label:'信息管理',icon:'fa-address-card'},
          {name:'edits',label:'参数设置',icon:'fa-cogs'},
          {name:'help',label:'帮助',icon:'fa-question-circle'},
          {name:'exit',label:'结束系统',icon:'fa-door-open'},
        ],
        selectitem:'dispatchFunction',    
      }
    },
     props: ['isshowmini'],
    components:{
      Badge,
    
    },
    methods:{
      menuclk:function(val){
        if (val==this.selectitem)return;
        this.selectitem=val;
        this.$emit('Bannerselectedchange',val);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body{
  margin: 0;
  padding: 0;
  
}
.trangle{
  position:absolute;
  width: 0px;
  height: 0px;
  border-left: 29px solid #164B77;
  border-top: 29px solid transparent;
  border-bottom: 29px solid transparent;
  left: 240px;
  top: 0px;
  z-index: -1;
}

.changewindows{
  position: absolute;
  top: 0;
  right: 5px;
  width:22px;
  height: 22px;
  font-size: 16px;
  line-height: 22px;

  cursor: pointer;
}

.banner{
  height: 58px;
}
h1, h2 {
  font-weight: normal;
}
.row {
  height: 58px;
  
  color: #ffffff ;
}
.menu{
background-color: #164B77;
  height: 58px;
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
    width: calc(100% - 240px);
}
.row>div:nth-child(2) svg {
   display: block !important;
   margin-left: 28px;
   margin-top: 10px;
   font-size: 24px;
}
.row>div:nth-child(2) div div {
   
   margin-top: -15px;
   width: 80px;
   text-align: center;
}
.row>div:nth-child(2)>div:nth-child(2) {
    float: right;
    width:150px;
    margin-top: -62px;
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
  transition: width 0.2s,background 0.2s, 0.2s linear .2s;/*反向过渡*/
}
a {
  color: #42b983;
}

.row>div:nth-child(2)>div:nth-child(2) li {
  margin: 0 0px;
  float: left;
  list-style-type: none;
  display: list-item;
}
.row>div:nth-child(2)>div:nth-child(2) li:nth-child(-n+2) {
 width: 40px;
 margin-top: 25px;
 font-size: 22px;
}
.row>div:nth-child(2)>div:nth-child(2) li:nth-child(3) {
  margin-top: -45px;
  font-size: 14px;
  margin-left: 80px;
}
.selectitem{
  background-color:#2B81BE;
   transition: width,background, 0.2s linear 0.2s;
}
.logo div:nth-child(1){
  width: 100px;
  float:left;
  font-size: 20px;
}
.logo div:nth-child(2){
  width: calc(100% - 100px);
  float:left;
  font-size: 16px;
  text-align: right;
  text-align:justify;
}
.logo div:nth-child(2) li{
 height: 16px;

   text-align:justify;
}
.logo div:nth-child(2) ul{
  margin-top: -8px;
  margin-left: -2px;
}
.logo div:nth-child(2) li:nth-child(2){
 letter-spacing:3px
}

</style>
<style>
.banner .ivu-badge-count{
  top: 0px !important;
}
</style>