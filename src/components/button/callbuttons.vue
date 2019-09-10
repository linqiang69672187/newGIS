<template>
<div class="comonul">
    <ul >
        <li><div><i class="material-icons">{{buttonType}}</i><span>{{buttonName}}</span></div></li>
        <li><Divider /></li>
        <li><span>{{buttonNumber}}</span></li>
    </ul>                
</div>

</template>
<script>
import { Divider   } from 'iview';

export default {
  components: {
    Divider
  },
  props: ['buttonType','buttonName','buttonNumber'],
   data(){
      return {
          bgColor: '#778899',
          fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              {
                  name: 'alertMe',
                  icon: 'https'
              }
          ]
      }
  },
  methods:{
      cache(){
          console.log('Cache Cleared');
      },
      alert(){
          alert('点击了按钮');
      }
  }
}
</script>

<style scoped>
.comonul{
    width: 110px;
    background-color: #000 !important;
    height: 50px;
    margin-bottom: 5px;
    margin-top: 3px;
    border-radius: 10px;
    margin-left: 15px;
    color: #fff;
    font-size: 20px;
}
.comonul li>div i{
   float: left;
}
.comonul .material-icons+span{
   float: right;
}
.ivu-tabs-tabpane{
    height: 170px;
    overflow-y: auto;
}
.comonul ul{
    height: 50px;
}
.comonul ul>li{
    width: 90%;
    height: 20px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
    list-style: none;
}
.comonul ul>li:nth-child(2){
    height: 2px;  
    margin-top: -3px;
}
.ivu-divider-horizontal{
    margin: 5px 0;
}
.comonul ul>li:nth-child(3) {
margin: 0 auto;
   margin-top: -35px;
margin-left: 5px;
 font-size:20px;
}
</style>
