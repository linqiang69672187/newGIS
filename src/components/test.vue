<template>
  <div>
 <button id="button">button</button><br>
    <ul id="container"></ul>  
  </div>
</template>
<script>

    export default {
        data () {
            return {
                   value2: '',
                   transfer:false,
                   data2: []
            }
        },
        mounted(){
          this.handleSearch2();
        },
        components:{
           
        },
        methods: {
             handleSearch2 () {
                 document.getElementById("button").addEventListener("click", function() {
                    // 记录任务开始时间
                    let now = Date.now();
                    // 插入一万条数据
                    const total = 10000;
                    // 获取容器
                    let ul = document.getElementById("container");
                    // 将数据插入容器中
                    
                    for (let i = 0; i < total; i++) {
                        let li = document.createElement("li");
                        li.innerText = ~~(Math.random() * total);
                        ul.appendChild(li);
                    }
                    
                    setTimeout(() => {
                        console.log("总运行时间：", Date.now() - now);
                    }, 0);
                    console.log("JS运行时间：", Date.now() - now);
                    });

            }
        }
    }
</script>
<style scoped>
.ivu-select-item div span:nth-child(1){
    float: left;
    width: 20px;
    margin-top: -5px;
    margin-left: -15px;
}

.ivu-select-item div span:nth-child(2){
      margin-left: 10px;
   
}
.ivu-select-item{
    text-align: left;
    font-size: 14px !important;
}
</style>
<style >
 .demo-auto-complete-item{
        padding: 4px 0;
        border-bottom: 1px solid #F6F6F6;
    }
    .demo-auto-complete-group{
        font-size: 12px;
        padding: 4px 6px;
    }
    .demo-auto-complete-group span{
        color: #666;
        font-weight: bold;
    }
    .demo-auto-complete-group a{
        float: right;
    }
    .demo-auto-complete-count{
        float: right;
        color: #999;
    }
    .demo-auto-complete-more{
        display: block;
        margin: 0 auto;
        padding: 4px;
        text-align: center;
        font-size: 12px;
    }
</style>