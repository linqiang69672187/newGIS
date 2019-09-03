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
                  icon: 'add'
              },
              {
                  name: 'alertMe',
                  icon: 'search'
              }
              ,
              {
                  name: 'alertMe',
                  icon: 'https'
              }
              ,
              {
                  name: 'alertMe',
                  icon: 'select_all'
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
  padding: 24px !important;
}
</style>