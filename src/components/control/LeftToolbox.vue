<template>
 <vue-fab mainBtnColor="#3599DB">
  <fab-item @clickItem="clickItem" :idx="0" title="add" icon="add" />
  <fab-item @clickItem="clickItem" :idx="1" title="https" icon="https" />
  <fab-item @clickItem="clickItem" :idx="2" title="edit" icon="edit" />
</vue-fab>
</template>

<script>
export default {
  data () {
    return {
      icon: 'add',
      activeIcon: 'add',
      size: 'normal',
      mainBtnColor: '#E64C3B',
      zIndex: 5,
      fabItem: {
        idx: 1,
        title: '这是一个演示的标题',
        icon: 'toc',
        color: '#C7D23B',
        titleColor: '#666',
        titleBgColor: '#FFF'
      }
    }
  },
  methods: {
    clickItem (item) {
      window.alert(item.idx)
    }
  }
}
</script>