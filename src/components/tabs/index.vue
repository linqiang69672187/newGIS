<template>
<div :style="backgroundDiv"  class="row">
    <div id="onlinechar"></div>
    <div  class="middle"> 
        <div id="gauguchar"></div>
         <div class='loader-ring'>
            <div class='loader-ring-light'></div>
            <div class='loader-ring-track'></div>
        </div>
      </div>
    <div id="onlinechartable" class="right">
      

    </div>
       
</div>
</template>
<script>
//import Table from "@/components/control/tables"
import Vue from 'vue';
import { setTimeout } from 'timers';
  export default {
        data () {
                return {
                     loading:true, 
                     backgroundDiv: {
                            backgroundImage: 'url(' + require('@/assets/images/tabs_table_bg.jpg') + ')'
                    } ,
                    updateecharbar:null,
                    updategaugeindex:null, 
                    updatedynamicline:null,
                    loadinter:null,                       
                }
        },
        components:{
         //Table
        },
        methods: {
           updatedata(){
             this.updatedynamicline('111');
             this.updategaugeindex('111')
             this.updateecharbar('122');
           },
           interLoadData(){
             let _this = this;
              Vue.axios.get('app/data/Json/hongkong.json', {
                            params: {
                                ctrl:'DialPadDao',
                                action: "MatchUserAndGroup",
                                 txtDialPad:this.inputnum
                            }
                          }).then((res) => {
                          //console.info(res);
                          _this.praseData(res.data); 
                          }).catch((err) => {
                          console.log(err)
                           
                   })

           },
          praseData(data){
          
           
           let onlinetime=0;
           let onlinecount=0;
           let deviececount=0;
           data.forEach((item)=>{   
                        onlinetime+=parseInt(item.onlineTime);
                        onlinecount+=parseInt(item.onlineTerminal);
                        deviececount+=parseInt(item.allTerminal);    
                    });
           this.updatedynamicline(onlinetime,onlinecount);
           this.updategaugeindex(onlinecount,deviececount);
           this.updateecharbar(data);
          },
           
        },
        created(){
          
        },
        destroyed() {
         clearInterval(this.loadinter);
        },
        mounted() {
          
        this.updatedynamicline = this.$chart.dynamicline('onlinechar');
        this.updategaugeindex = this.$chart.gaugeindex('gauguchar');
        this.updateecharbar = this.$chart.echarbar('onlinechartable');
        let _this=this;
        this.interLoadData();
        this.loadinter  = setInterval(function (){
              _this.interLoadData();
              }, 10000);
        }
    }
</script>
<style scoped>

#onlinechar{
    width:calc(50% - 110px);
    height: 220px;
    color: #fff !important;
    float: left;
}
.middle,#gauguchar{
    width:220px;
    height: 220px;
    float: left; 
}

#onlinechartable{
    margin-top: 10px;
    width:calc(50% - 110px);
    height: 220px;
    color: #fff !important;
    float: right;
}
 .row{
         height: 220px;
         width: 100%;
         background:no-repeat no-repeat;;
         background-size: 100%;  
         color: #fff;
    }


.loader-ring {
  position: relative;
  top: 0;
  left: 0;
  margin:12px 0 0 12px;
  width: 198px;
  height: 198px;
}

.loader-ring-light {
  width: 198px;
  height: 198px;
  -moz-border-radius: 198px;
  -webkit-border-radius: 198px;
  border-radius: 198px;
  -moz-box-shadow: 0 4px 0 #B4FF0B inset;
  -webkit-box-shadow: 0 4px 0 #B4FF0B inset;
  box-shadow: 0 4px 0 #B4FF0B inset;
  animation: rotate-360 2s linear infinite;
}

.loader-ring-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 198px;
  height: 198px;
  -moz-border-radius: 198px;
  -webkit-border-radius: 198px;
  border-radius: 198px;
  -moz-box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3) inset;
  -webkit-box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3) inset;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3) inset;
}

@keyframes rotate-360 {
  from {
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
<style >

</style>