<template>
<div :style="backgroundDiv"  class="row" >
<ul>
    <li>
        <div class="dialpane">
            <div >
                 <ul> 
                   <li class="inputli">
                             <AutoComplete
                                v-model="inputnum"
                                @on-search="handleSearch2"
                                placeholder="输入组号/个号/姓名"
                                :transfer='transfer'
                                 class="input"
                                 placement="top"
                                style="width:200px">
                                <Option v-for="item in data2" :value="item.issi" :key="item.issi">
                                    <div>
                                        <span><i class="material-icons" >{{item.type}}</i></span> <span> {{ item.issi }}({{ item.name }})</span>
                                    </div>           
                                </Option>
                            </AutoComplete>
                      <!-- <input v-model='inputnum' maxlength='15' class="input" placeholder="输入组号/个号/姓名"  />  -->
                       </li>
                   <li> <i @mousedown="buttonspress='Backspace'"  @click="backbtnclick"     @mouseleave="buttonspress=''" @mouseup="buttonspress=''" :class="buttonspress=='Backspace'?'backspacespress':''"  class="material-icons">backspace</i></li>
                </ul>
            </div>
            <div >
                <div class="number" >
                    <ul>
                        <li>
                            <transition   name="fade">
                            <div v-if="showthetab" @click="numbtnclick" :class="[buttonspress=='Digit1'?'buttonspress':'']"  v-ripple="'rgba(255, 255, 255, 0.35)'">1</div>
                            </transition>
                        </li>
                        <li>
                            <transition  name="fade">
                            <div v-if="showthetab" @click="numbtnclick"  :class="[buttonspress=='Digit2'?'buttonspress':'']"  v-ripple="'rgba(255, 255, 255, 0.35)'">2</div>
                               </transition>
                        </li>
                        <li>
                            <transition name="fade">
                            <div v-if="showthetab" @click="numbtnclick"  :class="[buttonspress=='Digit3'?'buttonspress':'']"  v-ripple="'rgba(255, 255, 255, 0.35)'">3</div>
                               </transition>
                        </li>
                        <li>
                             <transition name="fade">
                            <div v-if="showthetab" @click="numbtnclick"  :class="[buttonspress=='Digit4'?'buttonspress':'']"  v-ripple="'rgba(255, 255, 255, 0.35)'">4</div>
                               </transition>
                        </li>
                        <li>
                             <transition name="fade">
                            <div v-if="showthetab" @click="numbtnclick"  :class="[buttonspress=='Digit5'?'buttonspress':'']"  v-ripple="'rgba(255, 255, 255, 0.35)'">5</div>
                               </transition>
                        </li>
                        <li>
                             <transition name="fade">
                            <div v-if="showthetab" @click="numbtnclick"  :class="[buttonspress=='Digit6'?'buttonspress':'']"  v-ripple="'rgba(255, 255, 255, 0.35)'">6</div>
                               </transition>
                        </li>
                        <li>
                             <transition name="fade">
                            <div v-if="showthetab" @click="numbtnclick"  :class="[buttonspress=='Digit7'?'buttonspress':'']"  v-ripple="'rgba(255, 255, 255, 0.35)'">7</div>
                               </transition>
                        </li>
                        <li>
                             <transition name="fade">
                            <div v-if="showthetab" @click="numbtnclick"  :class="[buttonspress=='Digit8'?'buttonspress':'']"  v-ripple="'rgba(255, 255, 255, 0.35)'">8</div>
                               </transition>
                        </li>
                        <li>
                             <transition name="fade">
                            <div v-if="showthetab" @click="numbtnclick"  :class="[buttonspress=='Digit9'?'buttonspress':'']"  v-ripple="'rgba(255, 255, 255, 0.35)'">9</div>
                               </transition>
                        </li>
                        <li>
                             <transition name="fade">
                            <div v-if="showthetab" @click="numbtnclick"  :class="[buttonspress=='Digit0'?'buttonspress':'']"  v-ripple="'rgba(255, 255, 255, 0.35)'">0</div>
                               </transition>
                        </li>
                        <li>
                             <transition name="fade">
                            <div v-if="showthetab" @click="numbtnclick"  :class="[buttonspress=='*'?'buttonspress':'']"  v-ripple="'rgba(255, 255, 255, 0.35)'">*</div>
                               </transition>
                        </li>
                        <li>
                             <transition name="fade">
                            <div v-if="showthetab" @click="numbtnclick" :class="[buttonspress=='#'?'buttonspress':'']"   v-ripple="'rgba(255, 255, 255, 0.35)'">#</div>
                               </transition>
                        </li>
                    </ul>
                </div>
                <div class="buttons">
                    <ul>
                        <li v-if="showsingalcall" @click="startSC()"><div v-ripple="'rgba(255, 255, 255, 0.35)'" ><i class="material-icons">person</i><span>全双功</span></div></li>
                       
                        <li v-if="showsingalcall"><div v-ripple="'rgba(255, 255, 255, 0.35)'"><i class="material-icons">mic</i><span>半双功</span></div></li>
                        
                        <li v-if="showgroupcall"><div v-ripple="'rgba(255, 255, 255, 0.35)'"><i class="material-icons">group</i><span>组&nbsp;&nbsp;&nbsp;呼</span></div></li>                       
                       
                    </ul>
                </div>   
              
            </div>          
               <div><span :class="[fadeinanimation?'animated fadeInLeft':'']">{{msg}}</span></div> 
        </div>
    </li>
    <li><Divider type="vertical" /></li>
    <li>
       <div class="dialtabs">
       <Tabs name="commonplane" type="line" >
        <TabPane tab="commonplane" label="常用组"> 
            <div>
                <ul class="callcomonul">
                   
                    <li> <callbuttons  @btnclick="btnclk"   button-type="group" button-name="TG1" button-number="89999999"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999997"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999996"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999995"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999994"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999993"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999991"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="81999995"></callbuttons> </li>             

                </ul>
            </div>
        </TabPane>
        <TabPane tab="commonplane" label="常用个号">
            <div >
                   <ul class="callcomonul">
                   
                    <li> <callbuttons  @btnclick="btnclk"   v-ripple="'rgba(255, 255, 255, 0.35)'" button-type="person" button-name="张警官" button-number="24001"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="朱警官" button-number="24002"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="张警官" button-number="24003"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="周警官" button-number="24004"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="李警官" button-number="24005"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="林警官" button-number="24006"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="杨警官" button-number="24007"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="肖警官" button-number="24008"></callbuttons> </li>             
                </ul>
            </div>
        </TabPane>
        <TabPane tab="commonplane" label="最近联系">
            <div>
                 <ul class="callcomonul">
                   
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="张警官" button-number="24001"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="肖警官" button-number="24008"></callbuttons> </li>             
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG1" button-number="89999999"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999997"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999996"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999995"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="朱警官" button-number="24002"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="张警官" button-number="24003"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="周警官" button-number="24004"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="李警官" button-number="24005"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="林警官" button-number="24006"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="person" button-name="杨警官" button-number="24007"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999994"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999993"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="89999991"></callbuttons> </li>
                    <li> <callbuttons  @btnclick="btnclk"  button-type="group" button-name="TG2" button-number="81999995"></callbuttons> </li>              
                </ul>

            </div>
        </TabPane>
        </Tabs>
       
       </div>
    </li>
</ul>
</div>
</template>
<script>
import Ripple from 'vue-ripple-directive'
import { Divider ,TabPane,Tabs,AutoComplete,Option  } from 'iview';
import callbuttons from '@/components/button/callbuttons';
let msgtimetick;
export default {
  components: {
     Divider,
     Tabs,
     TabPane,
     callbuttons,
     AutoComplete,
     Option,
  },
  directives: {Ripple,},
  data(){
      return {
      inputnum:'',
      buttonspress:0,
      showgroupcall:true,
      transfer:false,
      showsingalcall:true, 
      showthetab:false,
      IsEncrypt:0,  //是否加密
      msg:'',
      data2: [],
      fadeinanimation:false,
      backgroundDiv: {
                            backgroundImage: 'url(' + require('@/assets/images/tabs_table_bg.jpg') + ')'
                    } ,  
      }
  
  }
  ,
 mounted(){
      var _this = this; 
      window.vue_dialplate =this;    
      this.$el.getElementsByClassName("ivu-input")[0].onkeydown = function(e) {   
             
         _this.keypress(e);
        };
      this.$el.getElementsByClassName("ivu-input")[0].onkeyup = function(e) {   
             
         _this.keyup(e);
        };
    },
  computed:{

  },
  methods:{
       handleSearch2 (value) {
                 if (value.indexOf('2')==0){
                    this.data2 = [
                                {'type':'person','issi':'24001','name':'张警官'},
                                {'type':'group','issi':'822889','name':'TG1'}
                                ]
                                return;
                 }
                 if (value.indexOf('t')==0){
                    this.data2 = [ 
                                {'type':'group','issi':'822889','name':'TG1'}
                                ]
                                return;
                 }
                if (value.indexOf('张')==0){
                    this.data2 = [ 
                                 {'type':'person','issi':'24001','name':'张警官'},
                                ]
                                return;
                 }
                this.data2 = []
               
            },
      keypress(event){
          console.info(event.code);
          this.showgroupcall = true;//后续优化，传值判断后，是否显示按钮
          this.showsingalcall=true;
          this.buttonspress =event.code;
      },
      keyup(event){
          this.buttonspress = 0;
      },
      btnclk(type,name,issi){
          this.inputnum =issi;
          switch(type){
              case "group":
                this.showgroupcall = true;
                this.showsingalcall=false;
              break;
              case "person":
                 this.showgroupcall = false;
                 this.showsingalcall=true;
              break;
              default:
                 this.showgroupcall = true;
                 this.showsingalcall=true;
              break;

          }
         
          
         
      },
      numbtnclick(el){
           this.inputnum +=el.target.innerText;
           this.$el.getElementsByClassName("ivu-input-default")[0].focus();
           this.showgroupcall = true;//后续优化，传值判断后，是否显示按钮
          this.showsingalcall=true;
      },
      backbtnclick(el){
           var n = this.inputnum.length;
           this.inputnum= this.inputnum.slice(0,n-1);
           this.$el.getElementsByClassName("ivu-input-default")[0].focus();
           this.showgroupcall = true;//后续优化，传值判断后，是否显示按钮
          this.showsingalcall=true;
      },
      sendparentvalue(val){  
         // this.inputnum='';
          var _this = this;
         
          setTimeout(() => {
              _this.$el.getElementsByClassName("ivu-input-default")[0].focus();
              _this.showthetab=true;
             
               
          }, 500);
      },
      clearval(){
          this.inputnum='';
      },
      hidetab(){
          this.showthetab=false;
      },
      startSC () { 
           let scactionX = document.getElementById("SCactionX");
           scactionX.StartSCall(this.inputnum,this.IsEncrypt);
      },
      CallMsg(issi,eventtype,msg,gssi,hookmethodsel){
         console.info(issi+','+eventtype+','+msg+','+gssi+','+hookmethodsel);
         this.showmsg(msg);
      },
      showmsg(msg){
        clearTimeout(msgtimetick);
                this.msg=msg;
                this.fadeinanimation=true;
                let _this = this;
                msgtimetick =  setTimeout(() => {
                    _this.fadeinanimation=false;   
                    _this.msg='';            
                }, 3000);
      } 
  }
}
</script>

<style scoped>
 .row{
     height: 220px;
     width: 100%;
    background:no-repeat no-repeat;;
    background-size: 100%;  
     z-index: 10;
     color: #fff;
 }
 .input:hover{
     border: 1px solid #2B81BE;
 }

 .inputli{
     float: left;
 }
 .inputli+li i{
     font-size: 40px;
     position: relative;
     left: -30px;
     color: #000;
     float: left;
     cursor: pointer;
     
 }
.row > ul{
    display: inline;  
    list-style: none; 
}
.row > ul>li:nth-child(1){
   width: 300px;
   height: 220px;
   float: left;
}
.row > ul>li:nth-child(2){
   width: 7px;
   height: 220px;
   float: left;
   margin-left: 15px;
}
.row > ul>li:nth-child(3){
   width: calc(100% - 355px);
   height: 220px;
   float: left;
}
.dialpane{
    width: 100%;
    height: 100%;
   
}
.dialpane>div:nth-child(1){
    height: 40px !important;
}
.dialpane>div:nth-child(2){
    height:140px !important;  
}
.dialpane>div:nth-child(3){
    height:30px !important;  
    line-height: 30px;
    text-align: left;
}
.dialpane>div:nth-child(3) span{
  width: 100%;
  text-align: left;
  float: left;
  margin-left: 10px;
}
.number{
    width: 210px;
    float: left;
}
.number div{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: #fff solid 1px;
    line-height: 40px;
    cursor: pointer;
    background: rgba(43,129,190,.3);

}
.number li{
   display: inline;
   float:left;
   margin-left: 12px;
   margin-bottom: 10px;

}
.buttons{
float: right;
width: 80px;
height: 100%;
}
.buttons li{
    display: block;

}
.buttons div{
width: 90px;;
background-color: #2B81BE;
height: 50px;
margin-bottom: 50px;
margin-top: -35px;
border-radius: 10px;
cursor: pointer;
}
.buttons i{
    margin-top: 5px;
    float: left;
    margin-left: 5px;
    font-size: 34px;
}
.buttons span{
 margin-top: 15px;
 float: right;
 margin-right: 5px;
  font-size: 14px;
}

.ivu-divider-vertical{
    height: 80%;
    margin-top: 20px;
}
.ivu-tabs{
    width: 100% ;
    height: 210px;
    margin-top: 5px;
    
}
.ivu-tabs-tabpane {
    margin-top: 3px;

}
.ivu-tabs-tabpane li{
    float: left;
  list-style: none;
}
.callcomonul li {
  float: left;
  list-style: none;
}
.buttonspress{
    background-color: #000;
    opacity: 0.5;
    -webkit-transform:scale(1.2) ; 
    -moz-transform:scale(1.2) ; 
    -o-transform:scale(1.2) ;
}

.backspacespress{
    color: #333333 !important; 
}
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   opacity: 0;
    transform: scale(0);
}

.ivu-select-item div span:nth-child(1){
    float: left;
    width: 20px;
    margin-top: -5px;
    margin-left: -15px;
}

.ivu-select-item div span:nth-child(2){
      margin-left: 10px;
   
}
.ivu-select-item{
    text-align: left;
    font-size: 14px !important;
}
.ivu-select-item {
    width: 100%;
}

</style>
<style>
.dialtabs .ivu-tabs-nav{
    margin-left: 15px;
    background-color: #2B81BE;
    width: 283px;
}
.demo-auto-complete-item{
        padding: 4px 0;
        border-bottom: 1px solid #F6F6F6;
    }
    .demo-auto-complete-group{
        font-size: 12px;
        padding: 4px 6px;
    }
    .demo-auto-complete-group span{
        color: #666;
        font-weight: bold;
    }
    .demo-auto-complete-group a{
        float: right;
    }
    .demo-auto-complete-count{
        float: right;
        color: #999;
    }
    .demo-auto-complete-more{
        display: block;
        margin: 0 auto;
        padding: 4px;
        text-align: center;
        font-size: 12px;
    }
     .input input{
    display: inline-block;
    width: 200px;
    height: 30px;
    padding: 4px 7px;
    font-size: 16px;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #515a6e;
    position: relative;
    left: 10px;
    top: 5px;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
 }
 .input{
  border: 0px !important;   
 }
 .dialpane .ivu-select-dropdown{
    margin-left: 5px ;
    margin-top: 6px;
}
</style>