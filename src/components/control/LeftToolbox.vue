<template>
  <fab :actions="fabActions"
       @daiplate="daiplate"
       @av_timer="av_timer"
       @basestation="basestation"
       @lock="lock"
       @select_rangle="select_rangle"
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
                  name: 'av_timer',
                  icon: 'av_timer',
                  color:'#164B77',
                  tooltip:'实时状况'
              },
              {
                  name: 'daiplate',
                  icon: 'dialpad',
                  tooltip:'拨号盘',
                   color:'#FE9900',
              },
              {
                  name: 'basestation',
                  icon: 'subject',
                  tooltip:'基站统计',
                   color:'#999999',
              }
              ,
              {
                  name: 'lock',
                  icon: 'screen_lock_landscape',
                  tooltip:'锁定跟踪',
                   color:'#cccccc',
              }, 
              {
                  name: 'select_rangle',
                  icon: 'select_all',
                  tooltip:'框选',
                  color:'#E54C3B',
              }
          ]
      }
  },
  methods:{
      daiplate(){
          this.$emit("daiplate");
          this.cleardom();
      },
      alert(){
      // @av_timer="av_timer"
      // @basestation="basestation"
      // @lock="lock"
      // @select_rangle="select_rangle"
      },
      av_timer(){
        window.vue_index.$refs.dmenu.changeshowtab('','实时状况');
         this.cleardom();
      },
      basestation(){
        window.vue_index.$refs.dmenu.changeshowtab('','基站统计');
         this.cleardom();
      },
      lock(){
        window.vue_index.$refs.dmenu.changeshowtab('','锁定跟踪');
         this.cleardom();
      },
      select_rangle(){
         boxSelection();//调用原来框选 
         this.cleardom();
      }
      ,
      cleardom(){
            try{
            if (window.navigator.userAgent.indexOf("MSIE")>=1){
            let dom =document.getElementsByClassName("tooltip");     
              for (let i = 0; i < dom.length-1; i++) {
                if(dom[i])
                dom[i].parentNode.removeChild(dom[i]);
              
              } 
            }
          }
          catch(e){}
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
@media screen and(-ms-high-contrast:active),(-ms-high-contrast:none){
  .fab-wrapper .fab-main i{
    margin-top: -17px !important;
    margin-left: -17px !important;
  }
}
[aria-hidden=false]{
  display: none;
}
</style>