<template>
  <fab :actions="fabActions"
       @cache="cache"
       @alertMe="alert"
       toggle-when-away="false"
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
          alert('您点击了按钮');
      }
  }
}
</script>

<style scoped>

</style>
