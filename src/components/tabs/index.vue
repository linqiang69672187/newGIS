<template>
<div class="row">
    <div id="onlinechar"></div>
</div>
</template>
<script>
import {Table} from 'iview';
  export default {
        data () {
                return {                       
                }
        },
        components:{
         
        },
        methods: {
           
        },
        created(){
    
        },
        mounted() {
        this.$chart.dynamicline('onlinechar');
        }
    }
</script>
<style scoped>

#onlinechar{
    width:100%;
    height: 100%;
    
}
 
</style>
<style >

</style>