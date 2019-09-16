<template>
<div :style="backgroundDiv"  class="row">
    <div id="onlinechar"></div>
    <div id="gauguchar" class="middle"></div>
    <div id="onlinechartable" class="right"><Table ref="tabledata"  :loading="loading"></Table></div>

</div>
</template>
<script>
import Table from "@/components/control/tables"
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
         Table
        },
        methods: {
           
        },
        created(){
    
        },
        mounted() {
        this.$chart.dynamicline('onlinechar');
          this.$chart.gaugeindex('gauguchar');
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
        }
    }
</script>
<style scoped>

#onlinechar{
    width:calc(75% - 220px);
    height: 220px;
    color: #fff !important;
    float: left;
}
.middle{
    width:220px;
    height: 220px;

    float: left; 
}

#onlinechartable{
    margin-top: 10px;
    width:25%;
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
</style>
<style >

</style>