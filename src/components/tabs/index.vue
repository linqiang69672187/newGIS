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
        <!-- <Table ref="tabledata"  :loading="loading"></Table>  -->

    </div>
       
</div>
</template>
<script>
//import Table from "@/components/control/tables"
import { setTimeout } from 'timers';
  export default {
        data () {
                return {
                     loading:true, 
                     backgroundDiv: {
                            backgroundImage: 'url(' + require('@/assets/images/tabs_table_bg.jpg') + ')'
                    } ,                        
                }
        },
        components:{
         //Table
        },
        methods: {
           
        },
        created(){
    
        },
        mounted() {
        this.$chart.dynamicline('onlinechar');
        this.$chart.gaugeindex('gauguchar');
        this.$chart.echarbar('onlinechartable');
        /**
        let _this =this;
                setTimeout(function(){
                    let datas=[
                        {
                            "entity": "上城区",
                            "count": "5",
                            "onlinetime": "2.3"
                        },
                        {
                            "entity": "滨江区",
                            "count": "4",
                            "onlinetime": "1.7"
                        },
                        {
                            "entity": "拱墅区",
                            "count": "3",
                            "onlinetime": "1.3"
                        },
                        {
                            "entity": "下城区",
                            "count": "5",
                            "onlinetime": "2.3"
                        },
                        {
                            "entity": "江干区",
                            "count": "5",
                            "onlinetime": "2.3"
                        },
                        {
                            "entity": "萧山区",
                            "count": "7",
                            "onlinetime": "2.9"
                        },
                    ]
                    let coloums=[
                         {
                        title: '单位',
                        key: 'entity'
                    },
                    {
                        title: '在线设备',
                        key: 'count'
                    },
                    {
                        title: '在线时长',
                        key: 'onlinetime'
                    }
                    ];
                _this.loading = false;
                _this.$refs.tabledata.creatindextable(datas,coloums);
                },2000);
                 **/
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