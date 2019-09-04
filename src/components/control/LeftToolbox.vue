<template>
  <fab :actions="fabActions"
       @cache="cache"
       @alertMe="alert"
       main-tooltip="点击展开"	
     	
  ></fab>


</template>
<script>
import fab from 'vue-fab'

export default {
  components: {
    fab
  },
   data(){
      return {
          bgColor: '#778899',
          position: 'top-right',
          fabActions: [
              {
                  name: 'cache',
                  icon: 'add',
                  color:'#164B77',
                  tooltip:'添加功能'
              },
              {
                  name: 'cache',
                  icon: 'screen_lock_landscape',
                  tooltip:'锁屏',
                   color:'#cccccc',
              },
              {
                  name: 'alertMe',
                  icon: 'search',
                  tooltip:'搜索',
                   color:'#999999',

              }
              ,
              {
                  name: 'alertMe',
                  icon: 'dialpad',
                  tooltip:'拨号盘',
                   color:'#FE9900',
              }
              ,
              {
                  name: 'alertMe',
                  icon: 'select_all',
                  tooltip:'框选',
                   color:'#E54C3B',
              }
          ]
      }
  },
  methods:{
      cache(){
          console.log('Cache Cleared');
      },
      alert(){
          alert('Clicked on alert icon');
      }
  }
}
</script>

<style scoped>
#bottom-right-wrapper{
  bottom: 260px !important;
  right: 30px !important;
}
</style>
<style>
.fab-main{
  padding: 26px !important;
}
</style>