<template>
<div class="row">
<ul>
    <li>
        <div class="dialpane">
            <ul>
                <li>
                    <Input placeholder="输入组号/个号" style="width: auto" />
                     <i class="fas fa-backspace"></i>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </li>
    <li></li>
    <li></li>
</ul>
</div>
</template>
<script>
import { Input  } from 'iview';

export default {
  components: {
      Input,
      Button
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
    
 }
.row > ul{
    display: inline;   
}
.row > ul>li:nth-child(1){
   width: 400px;
   height: 220px;
}
.dialpane{
    width: 100%;
    height: 100%;
    background-color: #000;
}

</style>
<style>

</style>