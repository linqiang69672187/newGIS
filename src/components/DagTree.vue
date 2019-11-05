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
                        title: '待加载单位',
                        loading: false,
                        children: [],
                        checked:true,
                        id:0,
                    }
                     
                ]
            }
        },
        mounted(){
            this.initEntity();
        },
        components:{
          Tree
        },
        methods: {
            loadData (item, callback) {
                 console.info(item);
                 let type=item.type;
                 let entity=item.entityid;
                  Vue.axios.get('/Handlers/MVCEasy.ashx', {
                            params: {
                                ctrl:'DialPadDao',
                                action: "GetTreeChildrenNode",
                                entityid:entity,
                                type:type  
                            }
                          }).then((res) => {
                                debugger;  
                              if (res.data!=''){  
                                                        
                              callback(res.data);
                              }
                          }).catch((err) => {
                            console.log(err)
                           
                          });
                
            },
            selectchange(array,item){
                let treeNode={entityId:item.id,objType:item.type,name:title};  
                displaypolicelistsdiv();//调用原来方法
                window.frames['policelists'].Displayprocessbar();//调用原来方法
                switch(treeNode.objType){
                    case "entity":
                    case "zhishuuser":
                      window.frames['policelists'].createpolicetable_ajax(treeNode.objType, treeNode.entityId, "");
                        break;
                    case "usertype":
                       window.frames['policelists'].createpolicetable_ajax(treeNode.objType, treeNode.name, treeNode.entityId);  
                        break;
                    default:
                        break;
                }
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
                  let zhishuString="";
                  let entityString="";
                  let typeString="";
                  for (let i = array.length-1; i >=0; i--){
                      switch (array[i].type) {
                          case "zhishuuser":
                             zhishuString+=array[i].id+',';
                              break;
                          case "usertype":
                              typeString+=array[i].entityid+":"+array[i].id+';';
                              break;  
                          default:
                              entityString+=array[i].id+',';
                              break;
                      }
                 }
                 let returnString =zhishuString+"/"+entityString+"/"+typeString;
                 checkedEntity = returnString;//全局赋值单位选择，赋值原有全局属性值
                 ReLoadUser();//刷新地图人员，调用原有方法
            },
           checkparent(array,item){
            for (let i = 0; i <array.length; i++){
                   if (array[i].nodeKey==item.nodeKey) return i;
                 }
                 return -1;

           },
           initEntity(){
               let _this=this;
               Vue.axios.get('/Handlers/MVCEasy.ashx', {
                            params: {
                                ctrl:'DialPadDao',
                                action: "GetTreeChildrenNode",
                                entityid:"",
                                type:"entity"  
                            }
                          }).then((res) => {
                              if (res.data!=''){  
                                  debugger;                          
                              _this.data3=res.data;
                              }
                          }).catch((err) => {
                            console.log(err)
                           
                          });
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