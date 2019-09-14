<template>
<div :style="backgroundDiv" class="row">
    <div class="left">
        <div>单位: <Cascader :data="data" filterable change-on-select></Cascader></div>
        <div></div>
        <div></div>
    </div>
    <div class="middle"></div>
    <div  class="right"></div>
</div>
</template>
<script>
import {Table,Cascader,} from 'iview';
  export default {
        data () {
            return {
                backgroundDiv: {
                            backgroundImage: 'url(' + require('@/assets/images/tabs_table_bg.jpg') + ')'
                    } ,  
                data: [{
                    value: 'jiangsu',
                    label: '杭州市公安局',
                    children: [
                        {
                            value: 'nanjing',
                            label: '滨江公安分局',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '浦沿派出所',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '上城区公安分局',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '吴山派出所',
                                },
                                {
                                    value: 'shizilin',
                                    label: '小营派出所',
                                }
                            ]
                        }
                    ],
                },
                {
                    value: 'beijing',
                    label: '特警大队',
                    children: [
                        {
                            value: 'gugong',
                            label: '一大队'
                        },
                        {
                            value: 'tiantan',
                            label: '二大队'
                        },
                        {
                            value: 'wangfujing',
                            label: '三大队'
                        }
                    ]
                }],
            }
        },
        components:{
            Table,Cascader,
        }
    }
</script>
<style scoped>
 .row{
         height: 220px;
         width: 100%;
         background:no-repeat no-repeat;;
         background-size: 100%;  
    }
.left{
    width: 320px;
  
    float: left; 
    height:220px ;  
}
.middle{
    width: 20px;
   
    float: left;   
    height:220px ;  
}
.right{
    width:  calc(100% - 340px);;
  
    float: left; 
    height:220px ;    
}
.left div{
    width: 100%;
    height: 70px;
    background-color: antiquewhite;
}
.left div:nth-child(1){
    margin-top: 10px;
}

</style>
<style >

</style>