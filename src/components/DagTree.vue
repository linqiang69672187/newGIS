<template>
<div class="tree">
    <Tree :data="data3" @on-select-change="selectchange"	 :load-data="loadData" show-checkbox></Tree>
</div>
</template>
<script>
import { Tree  } from 'iview';
    export default {
        data () {
            return {
                data3: [
                    {
                        title: '杭州市公安局',
                        loading: false,
                        children: [],
                        checked:true,
                        id:0,
                    }
                     
                ]
            }
        },
        components:{
          Tree
        },
        methods: {
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            title: 'XX公安局',
                            loading: false,
                            children: [],
                            id:1,
                            type:'entity',  //entity,
                          },
                        {
                            title: '朱警官',
                            id:2,
                        }
                    ];
                    callback(data);
                }, 1000);
            },
            selectchange(array,item){
                console.info(array);
                console.info(item);
            }
        }
    }
</script>
<style scoped>
.tree{
    margin: 0px;
    width: 200px;
    text-align: left;
    padding-left: 5px;
    color: #000;
    height: calc(100% - 30px);
    overflow: auto;
    z-index: 999;
    position: relative;
}

</style>