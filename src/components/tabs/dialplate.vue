<template>
<div class="row">
<ul>
    <li>
        <div class="dialpane">
            <div >
                 <ul> 
                   <li class="inputli"><Input class="input" placeholder="输入组号/个号"  /></li>
                   <li> <i class="material-icons">backspace</i></li>
                </ul>
            </div>
            <div >
                <div class="number">
                    <ul>
                        <li><div>1</div></li>
                        <li><div>2</div></li>
                        <li><div>3</div></li>
                        <li><div>4</div></li>
                        <li><div>5</div></li>
                        <li><div>6</div></li>
                        <li><div>7</div></li>
                        <li><div>8</div></li>
                        <li><div>9</div></li>
                        <li><div>0</div></li>
                        <li><div>*</div></li>
                        <li><div>#</div></li>
                    </ul>
                </div>
                <div class="buttons">
                    <ul>
                        <li><div><i class="material-icons">person</i><span>全双功</span></div></li>
                        <li><div><i class="material-icons">mic</i><span>半双功</span></div></li>
                        <li><div><i class="material-icons">group</i><span>组&nbsp;&nbsp;&nbsp;&nbsp;呼</span></div></li>                       
                    </ul>
                </div>   
              
            </div>          
               <div><span>这是一条消息</span></div> 
        </div>
    </li>
    <li><Divider type="vertical" /></li>
    <li>
       <div>
       <Tabs name="commonplane" type="line" >
        <TabPane tab="commonplane" label="常用组"> 
            <div>
                <ul class="callcomonul">
                   
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    

                </ul>
            </div>
        </TabPane>
        <TabPane tab="commonplane" label="常用个号">
            <div >
                   <ul class="callcomonul">
                   
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    

                </ul>
            </div>
        </TabPane>
        <TabPane tab="commonplane" label="最近联系">
            <div>
                 <ul class="callcomonul">
                   
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    <li> <callbuttons></callbuttons> </li>
                    

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

import { Divider ,TabPane,Tabs  } from 'iview';
import callbuttons from '@/components/button/callbuttons';

export default {
  components: {
     Divider,
     Tabs,
     TabPane,
     callbuttons,
  },
   data(){
      return {
        backgroundDiv: {
           
        }
    }
  },
  methods:{
      cache(){
      },
      alert(){
      }
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
     border: #2B81BE;
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
     left: 40px;
     color: #fff;
     float: left;
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
width: 100%;
background-color: #164B77;
height: 35px;
margin-bottom: 15px;
margin-top: 3px;
border-radius: 5px;

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
</style>
<style>

</style>