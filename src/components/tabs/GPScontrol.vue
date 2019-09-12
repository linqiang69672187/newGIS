<template>
<div :style="backgroundDiv" class="row">
    <div class="left"></div>
    <div class="middle"></div>
    <div  class="right"></div>
</div>
</template>
<script>
import {Table} from 'iview';
  export default {
        data () {
                return {  
                    backgroundDiv: {
                            backgroundImage: 'url(' + require('@/assets/images/tabs_table_bg.jpg') + ')'
                        }                     
                }
        },
        components:{
         
        },
        methods: {
           
        },
        created(){
    
        },
        mounted() {
        
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
</style>
<style >

</style>