<template>
<div class="row">
<ul>
    <li>
        <div class="dialpane">
            <div >
                 <ul> 
                   <li class="inputli"><input v-model='inputnum'    maxlength='15' @keydown="keypress" @keyup="keyup" class="input" placeholder="输入组号/个号"  /></li>
                   <li> <i @mousedown="buttonspress='Backspace'"  @click="backbtnclick"     @mouseleave="buttonspress=''" @mouseup="buttonspress=''" :class="buttonspress=='Backspace'?'backspacespress':''"  class="material-icons">backspace</i></li>
                </ul>
            </div>
            <div >
                <div class="number">
                    <ul>
                        <li><div @click="numbtnclick"  :class="buttonspress=='Digit1'?'buttonspress':''"  v-ripple="'rgba(255, 255, 255, 0.35)'">1</div></li>
                        <li><div @click="numbtnclick"  :class="buttonspress=='Digit2'?'buttonspress':''" v-ripple="'rgba(255, 255, 255, 0.35)'">2</div></li>
                        <li><div @click="numbtnclick"  :class="buttonspress=='Digit3'?'buttonspress':''" v-ripple="'rgba(255, 255, 255, 0.35)'">3</div></li>
                        <li><div @click="numbtnclick"  :class="buttonspress=='Digit4'?'buttonspress':''" v-ripple="'rgba(255, 255, 255, 0.35)'">4</div></li>
                        <li><div @click="numbtnclick"  :class="buttonspress=='Digit5'?'buttonspress':''" v-ripple="'rgba(255, 255, 255, 0.35)'">5</div></li>
                        <li><div @click="numbtnclick"  :class="buttonspress=='Digit6'?'buttonspress':''" v-ripple="'rgba(255, 255, 255, 0.35)'">6</div></li>
                        <li><div @click="numbtnclick"  :class="buttonspress=='Digit7'?'buttonspress':''" v-ripple="'rgba(255, 255, 255, 0.35)'">7</div></li>
                        <li><div @click="numbtnclick"  :class="buttonspress=='Digit8'?'buttonspress':''" v-ripple="'rgba(255, 255, 255, 0.35)'">8</div></li>
                        <li><div @click="numbtnclick"  :class="buttonspress=='Digit9'?'buttonspress':''" v-ripple="'rgba(255, 255, 255, 0.35)'">9</div></li>
                        <li><div @click="numbtnclick"  :class="buttonspress=='Digit0'?'buttonspress':''" v-ripple="'rgba(255, 255, 255, 0.35)'">0</div></li>
                        <li><div @click="numbtnclick"  v-ripple="'rgba(255, 255, 255, 0.35)'">*</div></li>
                        <li><div @click="numbtnclick"  v-ripple="'rgba(255, 255, 255, 0.35)'">#</div></li>
                    </ul>
                </div>
                <div class="buttons">
                    <ul>
                        <li><div v-ripple="'rgba(255, 255, 255, 0.35)'" ><i class="material-icons">person</i><span>全双功</span></div></li>
                        <li><div><i class="material-icons">mic</i><span>半双功</span></div></li>
                        <li><div><i class="material-icons">group</i><span>组&nbsp;&nbsp;&nbsp;呼</span></div></li>                       
                    </ul>
                </div>   
              
            </div>          
               <div><span>这是一条消息</span></div> 
        </div>
    </li>
    <li><Divider type="vertical" /></li>
    <li>
       <div class="dialtabs">
       <Tabs name="commonplane" type="line" >
        <TabPane tab="commonplane" label="常用组"> 
            <div>
                <ul class="callcomonul">
                   
                    <li> <callbuttons @btnclick="btnclk"   button-type="group" button-name="TG1" button-number="89999999"></callbuttons> </li>
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
import { Divider ,TabPane,Tabs  } from 'iview';
import callbuttons from '@/components/button/callbuttons';

export default {
  components: {
     Divider,
     Tabs,
     TabPane,
     callbuttons,
  },
  directives: {Ripple,},
  data(){
      return {
      inputnum:'',
      buttonspress:0,
      }
  
  },
  methods:{
      keypress(event,el){
          console.info(event.code);
        
          this.buttonspress =event.code;
      },
      keyup(event){
          this.buttonspress = 0;
      },
      btnclk(type,name,issi){
          this.inputnum =issi;
      },
      numbtnclick(el){
           this.inputnum +=el.target.innerText;
      },
      backbtnclick(el){
            
            console.info(this.inputnum.length);
           var n = this.inputnum.length;
           this.inputnum= this.inputnum.slice(0,n-1);
 

      },
  }
}
</script>

<style scoped>
 .row{
     height: 220px;
     width: 100%;
     background-color: #515a6e;
     z-index: 10;
     color: #fff;
 }
 .input:hover{
     border: 1px solid #2B81BE;
 }
 .input{
    display: inline-block;
    width: 200px;
    height: 30px;
    padding: 4px 7px;
    font-size: 16px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    position: relative;
    left: 10px;
    top: 5px;
    cursor: text;
  
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
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
   width: 30px;
   height: 220px;
   float: left;
}
.row > ul>li:nth-child(3){
   width: calc(100% - 335px);
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
width: 70px;;
background-color: #164B77;
height: 35px;
margin-bottom: 15px;
margin-top: 3px;
border-radius: 5px;
cursor: pointer;
}
.buttons i{
    margin-top: 5px;
    float: left;
    margin-left: 5px;
    font-size: 24px;
}
.buttons span{
 margin-top: 10px;
 float: right;
 margin-right: 5px;
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
    color: #fff;
    opacity: 0.35;
}

.backspacespress{
    color: #333333 !important; 
}
</style>
<style>
.dialtabs .ivu-tabs-nav{
    float:right !important;

}

</style>