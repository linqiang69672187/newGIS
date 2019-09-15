<template>
<div :style="backgroundDiv"  class="row">
    <div id="onlinechar"></div>
</div>
</template>
<script>
import {Table} from 'iview';
  export default {
        data () {
                return { 
                     backgroundDiv: {
                            backgroundImage: 'url(' + require('@/assets/images/tabs_table_bg.jpg') + ')'
                    } ,                        
                }
        },
        components:{
         
        },
        methods: {
           
        },
        created(){
    
        },
        mounted() {
        Vue.axios.get('/assets/Json/hangzhou.json', {
                            params: 'data'
                          }).then((res) => {
                            console.log(res)
                            
                          }).catch((err) => {
                            console.log(err)
                            alert('请求出错！')
                          })
        }
    }
</script>
<style scoped>

#onlinechar{
    width:100%;
    height: 220px;
    color: #fff !important;
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