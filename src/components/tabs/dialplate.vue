<template>
<div  :style="backgroundDiv"  class="row" @keypress.space="PTT" @keyup="releasePTT">
<ul>
    <li>
        <div class="dialpane">
            <div >
                 <ul> 
                   <li class="inputli">
                             <AutoComplete
                                v-model.lazy.trim="inputnum"
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
                        <li v-show="showsingalcall" @click="startDC()"><div ><i class="material-icons">person</i><span>全双功</span></div></li>
                       
                        <li v-if="showsingalcall" @mouseup="SCEASEDPTT()" @mousedown="StartSCall()"><div ><i class="material-icons">mic</i><span>半双功</span></div></li>
                        
                        <li v-if="showgroupcall" @mouseup="GCEASEDPTT()" @mousedown="startGCall()"><div ><i class="material-icons">group</i><span>组&nbsp;&nbsp;&nbsp;呼</span></div></li>                       
                        
                        <li v-if="iscalling" @click="endcall"><div class="endcall"><i class="material-icons">call_end</i><span>结&nbsp;&nbsp;&nbsp;束</span></div></li>
                        
                        <li  @mouseup="releasePTT" @mousedown="PTT" v-if="isptt"><div class="Ptt"><i class="material-icons">flash_on</i><span>P&nbsp;&nbsp;T&nbsp;&nbsp;T</span></div></li>

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
       <TabPane tab="commonplane" label="通话中"> 
            <div>
                <ul class="callcomonul">
                 <li v-for="(item,key) in calling" :key="key">
                    <callbuttons  @btnclick="btnclk"   :button-type="item.type" :button-name="item.name.substr(0,5)" :button-number="item.issi"></callbuttons> 
                 </li>
                </ul>
            </div>
        </TabPane>
        <TabPane tab="commonplane" label="常用组"> 
            <div>
                <ul class="callcomonul">
                   <li v-for="(item,key) in groups" :key="key">
                    <callbuttons  @btnclick="btnclk"   button-type="group" :button-name="item.name.substr(0,5)" :button-number="item.issi"></callbuttons> 
                   </li>                   
                </ul>
            </div>
        </TabPane>
        <TabPane tab="commonplane" label="常用个号">
            <div >
                   <ul class="callcomonul">
                    <li v-for="(item,key) in users" :key="key">
                        <callbuttons  @btnclick="btnclk"   button-type="person" :button-name="item.name.substr(0,5)" :button-number="item.issi"></callbuttons> 
                    </li> 
                   </ul>
            </div>
        </TabPane>
        <TabPane tab="commonplane" label="最近联系">
            <div>
                 <ul class="callcomonul">
                  <li v-for="(item,key) in contacts" :key="key">
                    <callbuttons  @btnclick="btnclk"   :button-type="item.type" :button-name="item.name.substr(0,5)" :button-number="item.issi"></callbuttons> 
                 </li> 
                 </ul>

            </div>
        </TabPane>
        
        </Tabs>
       
       </div>
    </li>
</ul>
<div :class="[this.ocxRegStatus==true?'ocxRegStatus':'']" class="shadediv"></div>
</div>
</template>
<script>
import Vue from 'vue'
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
      showgroupcall:true, //显示组呼
      transfer:false,
      showsingalcall:true, //显示单呼
      showthetab:false,
      IsEncrypt:0,  //是否加密
      msg:'',
      data2: [], //联想中的号码
      fadeinanimation:false,
      backgroundDiv: {
                            backgroundImage: 'url(' + require('@/assets/images/tabs_table_bg.jpg') + ')'
                    }, 
      calling:[],
      users:[],
      groups:[],
      contacts:[],
      iscalling:false,
      isptt:false,
      selectissi:{},
      
      }
  
  }
  ,
  props:['ocxRegStatus']
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
        this.initgroupandusers();//初始化常用组、个、最近联系人  
        console.info(this.ocxRegStatus);
    },
  computed:{

  },
  methods:{
       handleSearch2 (value) {
                this.data2 = [];
                var _this =this;
                  Vue.axios.get('/Handlers/MVCEasy.ashx', {
                            params: {
                                ctrl:'DialPadDao',
                                action: "MatchUserAndGroup",
                                 txtDialPad:_this.inputnum
                            }
                          }).then((res) => {
                              if (res.data!=''){
                              _this.data2 = res.data;
                              }
                          }).catch((err) => {
                            console.log(err)
                           
                          })
            },
      initgroupandusers(){
                this.data2 = [];
                var _this =this;
                  Vue.axios.get('/app/data/json/hongkong.json', {//'/app/data/json/hongkong.json','/Handlers/MVCEasy.ashx'
                            params: {
                                ctrl: "DialPadDao",
                                action: "GetFrequentData",
                              
                            }
                          }).then((res) => {                  
                            _this.users = res.data.commonUser;
                            _this.groups = res.data.commonGroup;
                            _this.contacts = res.data.latelyUserAndGroup;

                          }).catch((err) => {
                            console.log(err)
                           
                          })
      },
      keypress(event){
         // this.showgroupcall = true;//后续优化，传值判断后，是否显示按钮
         // this.showsingalcall=true;
          this.buttonspress =event.code;
      },
      keyup(event){
          this.buttonspress = 0;
      },
      btnclk(type,name,issi){
          this.inputnum =issi;
          this.selectissi.name=name;
          this.selectissi.type=type;
          this.selectissi.issi=issi;
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
           //this.showgroupcall = true;//后续优化，传值判断后，是否显示按钮
           //this.showsingalcall=true;
      },
      backbtnclick(el){
           var n = this.inputnum.length;
           this.inputnum= this.inputnum.slice(0,n-1);
           this.$el.getElementsByClassName("ivu-input-default")[0].focus();
          //this.showgroupcall = true;//后续优化，传值判断后，是否显示按钮
          //this.showsingalcall=true;
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
      startDC () { //开始全双工单呼
           let scactionX = document.getElementById("SCactionX");
           scactionX.StartDCall(this.inputnum,this.IsEncrypt);
      },
     startGCall() {   //开始组呼
           let scactionX = document.getElementById("SCactionX");
           scactionX.StartGCall(this.inputnum,this.IsEncrypt);
      },
      GCEASEDPTT(){//组呼释放授权
            let scactionX = document.getElementById("SCactionX");
            scactionX.GCEASEDPTT(this.inputnum);
      },
     StartSCall() { //开始半双工单呼
           let scactionX = document.getElementById("SCactionX");
           scactionX.StartSCall(this.inputnum,this.IsEncrypt);
      },
     SCEASEDPTT(){//半双工单呼释放授权
            let scactionX = document.getElementById("SCactionX");
            scactionX.SCEASEDPTT(this.inputnum);
      },
      releasePTT(){
        let scactionX = document.getElementById("SCactionX");
        this.calling.forEach(item=>{
                            if(item.issi==this.inputnum){
                            switch (item.eventtype){
                                case "00":  
                                        scactionX.SCEASEDPTT(this.inputnum); 
                                    break;
                                    case "10":
                                        scactionX.GCEASEDPTT(this.inputnum);
                                    break;
                            }
                            return;
                            }
                        })
      },
      PTT(){
          let scactionX = document.getElementById("SCactionX");
         
          this.calling.forEach(item=>{
                            if(item.issi==this.inputnum){
                                 console.info(item);
                            switch (item.eventtype){
                                case "00":  
                                        scactionX.StartSCall(this.inputnum,this.IsEncrypt); 
                                    break;
                                    case "10":
                                        scactionX.StartGCall(this.inputnum,this.IsEncrypt);
                                    break;
                            }
                            return;
                            }
                        })
      },
      endcall(){//结束呼叫
            let scactionX = document.getElementById("SCactionX");
            this.calling.forEach(item=>{
                            if(item.issi==this.inputnum){
                               switch (item.eventtype){
                                   case "00":  
                                        scactionX.ENDSCall(this.inputnum); 
                                       break;
                                    case "01":
                                        scactionX.EndDCall(this.inputnum);
                                       break;
                                    case "10":
                                        scactionX.ENDGCall(this.inputnum);
                                       break;
                               }
                            return;
                            }
                        })
          
      }, 
      inputnumchange(){
          console.info(this.inputnum);
      },
      CallMsg(issi,eventtype,msg,gssi,hookmethodsel){
         console.info(issi+','+eventtype+','+msg+','+gssi+','+hookmethodsel);
         if (eventtype=='10'){  //组呼
              switch (msg){
                    case "CC_CONNECT":
                    case "CC_CONNECTACK":               
                        let gssi_in=false;
                        this.calling.forEach(item=>{
                            if(item.issi==gssi){
                                gssi_in=true;
                            return;
                            }
                        })
                        if (!gssi_in){ 
                            this.calling.push(
                                {issi:gssi,eventtype:eventtype,type:'group',iscalling:true,name:'张警官'},
                            ); 
                            this.showgroupcall=false;
                            this.showsingalcall=false;
                            this.iscalling=true;
                            this.isptt=true;
                        }
                        break;
                    case "CC_RELEASE":
                        this.calling.forEach((item,index)=>{
                            if(item.issi==gssi){
                                this.calling.splice(index,1);
                            return;
                            }
                        });
                        if (gssi==this.inputnum){
                            this.showgroupcall=true;
                            this.showsingalcall=false;
                            this.iscalling=false;
                            this.isptt=false;
                        } 
                        break;

                }
         }
         else{
                switch (msg){
                    case "CC_CONNECT":
                    case "CC_CONNECTACK":
                    case "CC_ALERT":
                    case "CC_CALLPROCEEDING":    
                        let issi_in=false;
                        this.calling.forEach(item=>{
                            if(item.issi==issi){
                                issi_in=true;
                            return;
                            }
                        })
                        if (!issi_in){ 
                            this.calling.push( 
                                {issi:issi,eventtype:eventtype,type:'person',iscalling:true,name:'张警官'},
                            )
                            this.showgroupcall=false;
                            this.showsingalcall=false;
                            this.iscalling=true;
                           
                            if (eventtype=="00"){
                                 this.isptt=true;
                            }else{
                                 this.isptt=false;
                            }
                        }
                        break;
                    case "CC_RELEASE":
                        this.calling.forEach((item,index)=>{
                            if(item.issi==issi){
                                this.calling.splice(index,1);
                            return;
                            }
                        })
                        if (issi==this.inputnum){
                            this.showgroupcall=false;
                            this.showsingalcall=true;
                            this.iscalling=false;
                            this.isptt=false;
                        }   

                        break;

                }
            }       
         this.showmsg(issi,eventtype,msg,gssi,hookmethodsel);
      },
      showmsg(issi,eventtype,msg,gssi,hookmethodsel){
        clearTimeout(msgtimetick);
                this.msg=issi+msg;
                this.fadeinanimation=true;
                let _this = this;
                msgtimetick =  setTimeout(() => {
                    _this.fadeinanimation=false;   
                    _this.msg='';            
                }, 3000);
      } 
  },
  watch:{
      inputnum:function(newval,oldval){
          let _this = this;
         if (this.selectissi.type){
            switch (this.selectissi.type){
                            case "group":  //组号
                                this.showgroupcall=true;
                                this.showsingalcall=false;
                                this.iscalling=false;
                                this.isptt=false;
                                break;
                            case "person"://个人
                                this.showgroupcall=false;
                                this.showsingalcall=true;
                                this.iscalling=false;
                                this.isptt=false;
                                break;
                        }
               this.selectissi={};
               return;       
           }
        let retrunnow=false;
        this.calling.forEach(item=>{   //查询正在通话中是否存在
                            if(item.issi==_this.inputnum){
                               switch (item.eventtype){
                                   case "00":  //正在单呼半双工
                                        _this.showgroupcall=false;
                                        _this.showsingalcall=false;
                                        _this.iscalling=true;
                                        _this.isptt=true;
                                       break;
                                    case "01"://正在单呼全双工
                                        _this.showgroupcall=false;
                                        _this.showsingalcall=false;
                                        _this.iscalling=true;
                                        _this.isptt=false;
                                       break;
                                    case "10"://正在组呼
                                        _this.showgroupcall=false;
                                        _this.showsingalcall=false;
                                        _this.iscalling=false;
                                        _this.isptt=false;
                                       break;
                               }
                               retrunnow=true;
                            return;
                            }
                        });
        if (retrunnow) return;
        console.info(this);
        this.data2.forEach(item=>{   //查询数据库里是否存在
                            if(item.issi==_this.inputnum){
                               switch (item.type){
                                   case "group":  //组号
                                        _this.showgroupcall=true;
                                        _this.showsingalcall=false;
                                        _this.iscalling=false;
                                        _this.isptt=false;
                                       break;
                                    case "person"://个人
                                        _this.showgroupcall=false;
                                        _this.showsingalcall=true;
                                        _this.iscalling=false;
                                        _this.isptt=false;
                                       break;
                               }
                               retrunnow=true;
                            return;
                            }
                        });

        if (retrunnow) return;

        this.showgroupcall=true;
        this.showsingalcall=true;
        this.iscalling=false;
        this.isptt=false;
       
      }, 
     
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
.endcall{
    background-color: #ed4014 !important;
}
.Ptt{

}
</style>
<style>
.dialtabs .ivu-tabs-nav{
    margin-left: 15px;
    background-color: #2B81BE;
    
}
.dialtabs .ivu-tabs-tab:last-child{
margin-right: 0px !important;
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
.shadediv{
    position: relative;
    left: 0;
    top: 0;
    background-color: rgba(255,255,255,.3);
    width: 100%;
    height: 100%;

    line-height: 200px;
}
.ocxRegStatus{
    display: none;
}
</style>