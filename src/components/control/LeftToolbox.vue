<template>
<div>
    <i class="material-icons">add</i>
 <vue-fab 
  :mainBtnColor="mainBtnColor" 
  :zIndex="zIndex" 
  :icon="icon" 
  :size="size" 
  :activeIcon="activeIcon">
  <fab-item 
    @clickItem="clickItem"
    :idx="fabItem.idx" 
    :title="fabItem.title" 
    :icon="fabItem.icon" 
    :color="fabItem.color" 
    :titleColor="fabItem.titleColor" 
    :titleBgColor="fabItem.titleBgColor" />
</vue-fab>
</div>
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