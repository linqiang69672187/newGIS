<template>
<div class="tree">
    <Tree :data="data3" @on-select-change="selectchange" @on-check-change="checkchange"	 :load-data="loadData" show-checkbox></Tree>
</div>
</template>
<script>
import Vue from 'vue';
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
                 console.info(item);
                  Vue.axios.get('/app/data/json/tree.json', {
                            params: {
                                ctrl:'DialPadDao',
                                action: "MatchUserAndGroup",
                               
                            }
                          }).then((res) => {
                              if (res.data!=''){
                             
                              callback(res.data);
                              }
                          }).catch((err) => {
                            console.log(err)
                           
                          });
                
            },
            selectchange(array,item){
              
                let treeNode={entityId:item.id,objType:item.type,name:title};
                
                console.info(treeNode);
                onClick(null,"treeDemo",treeNode)
            },
            checkchange(array,item){
                console.info(array);
                 for (let i = array.length-1; i >=0; i--){
                   for (let n = 0; n <array[i].children.length; n++){
                       let index =this.checkparent(array,array[i].children[n]); //检查父节点是否已经选中，如果已经包含则该节点排除
                       array.splice(index,1); 
                   }
                   
                 }
                  console.info(array);
            },
           checkparent(array,item){
            for (let i = 0; i <array.length; i++){
                   if (array[i].nodeKey==item.nodeKey) return i;
                 }
                 return -1;

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