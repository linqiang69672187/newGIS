<template>
  <fab :actions="fabActions"
       @cache="cache"
       @alertMe="alert"
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
          alert('Clicked on alert icon');
      }
  }
}
</script>

<style scoped>

</style>
