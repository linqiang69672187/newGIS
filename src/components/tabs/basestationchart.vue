<template>
<div :style="backgroundDiv"  class="row">
    
    <div id="Basestationchart" class="right">
      

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
                 
                    loadinter:null,                       
                }
        },
        components:{
         //Table
        },
        methods: {
           
           interLoadData(){
             let _this = this;
              Vue.axios.get('/Handlers/MVCEasy.ashx', {
                            params: {
                                ctrl:'DialPadDao',
                                action: "GetTerminalOnlineInfo",
                               
                            }
                          }).then((res) => {
                          _this.praseData(res.data); 
                          }).catch((err) => {
                          console.log(err)
                           
                   })

           },
          praseData(data){
          
           
           let onlinetime=0;
           let onlinecount=0;


           this.updateecharbar(data);
          },
           
        },
        created(){
          
        },
        destroyed() {
         clearInterval(this.loadinter);
        },
        mounted() {
          
    
        this.updateecharbar = this.$chart.echarbar('Basestationchart');
        let _this=this;
        this.interLoadData();
        this.loadinter  = setInterval(function (){
              _this.interLoadData();
              }, 10000);
        }
    }
</script>
<style scoped>

#Basestationchart{
    width:100%;
    height: 220px;
    color: #fff !important;
    float: left;
}

 .row{
         height: 220px;
         width: 100%;
         background:no-repeat no-repeat;;
         background-size: 100%;  
         color: #fff;
    }

</style>
<style >

</style>