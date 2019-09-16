<template>
<div  class="row">
    <div id="mapchar"></div>
</div>
</template>
<script>
import {Table} from 'iview';
  export default {
        data () {
                return { 
                     backgroundDiv: {
                         
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
        this.$chart.drawmap('mapchar');
        }
    }
</script>
<style scoped>

#mapchar{
    width:100%;
    height: 220px;
    color: #fff !important;
}
 .row{
         height: 220px;
         width: 100%;
       
    }
</style>
<style >

</style>