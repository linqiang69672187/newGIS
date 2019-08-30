<template>
<div class="row">
    <div><Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="macOS" v-if="tab0" icon="ios-key">标签一的内容1</TabPane>
        <TabPane label="Windows" v-if="tab1" icon="logo-windows">标签二的内容</TabPane>
        <TabPane label="Linux" v-if="tab2" icon="logo-tux">标签三的内容</TabPane>
    </Tabs>
    </div>
    <div>
        <Tabs >
        <TabPane label="组呼"  icon="ios-key">标签一的内容1</TabPane>
        <TabPane label="单呼"  icon="logo-windows">标签二的内容</TabPane>
        <TabPane label="紧急呼叫"  icon="logo-tux">标签三的内容</TabPane>
         </Tabs>
    </div>
  
</div>
</template>
<script>
import { Tabs,TabPane  } from 'iview';
    export default {
        data () {
                return {
                        tab0: true,
                        tab1: true,
                        tab2: true
                    }
        },
        components:{
          Tabs,TabPane
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            }
        }
    }
</script>
<style scoped>
.row{
margin: 0px;
width: 100%;
height: 250px;
}
.row>div:nth-child(1){
width: calc(100% - 400px);
float: left;
}
.row>div:nth-child(2){
width: 400px;
float: right;
border-top: 1px solid #dcdee2;
margin-top: 31px;
}

</style>