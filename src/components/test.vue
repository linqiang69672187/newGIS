<template>
  <div class="main">

      <i class="icons iconfont material-icons vue-fab-iconfont-icons icon-add" ></i>
    <vue-fab icon="icon-add" 
  fabItemAnimate="default" 
  mainBtnColor="#16C2C2">
  <fab-item @clickItem="clickBABA" icon="icon-add" :idx="0" title="iconfont.cn">
  </fab-item>
  <fab-item @clickItem="clickBABA" icon="icon-add" :idx="1" title="交换">
  </fab-item>
  <fab-item @clickItem="clickBABA" icon="icon-add" :idx="2" title="聚焦">
  </fab-item>
</vue-fab>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }},
    methods: {
      clickItem: function (params) {
        window.alert('idx: ' + params.idx)
      },
      clickBABA: function () {
        window.open('https://www.iconfont.cn/')
      },
      clickMainBtn: function () {
        window.alert('主菜单为空时点击主Fab会触发clickMainBtn事件')
      },
      hidenFab: function () {
        this.$refs.vuefab.onOffFab(false)
      },
      copyCode: function (code) {
        this.$refs.textarea.value = code
        this.$refs.textarea.select()
        document.execCommand('Copy')
        this.$refs.textarea.value = ''
        window.alert('复制成功')
      },
      showCode: function (item) {
        if (item.isShow) {
          item.isShow = false
          return
        }
        this.democode.forEach((item) => {
          item.isShow = false
        })
        item.isShow = !item.isShow
      }
    },
    created () {

    }
  }
</script>

<style scoped>

</style>
