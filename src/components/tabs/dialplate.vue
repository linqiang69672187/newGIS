<template>
<div class="row">
<ul>
    <li>
        <div class="dialpane">
            <div >
                 <ul> 
                   <li class="inputli"><Input class="input" placeholder="输入组号/个号"  /></li>
                   <li> <i class="material-icons">backspace</i></li>
                </ul>
            </div>
            <div >
                <div class="number">
                    <ul>
                        <li><div>1</div></li>
                        <li><div>2</div></li>
                        <li><div>3</div></li>
                        <li><div>4</div></li>
                        <li><div>5</div></li>
                        <li><div>6</div></li>
                        <li><div>7</div></li>
                        <li><div>8</div></li>
                        <li><div>9</div></li>
                        <li><div>0</div></li>
                        <li><div>*</div></li>
                        <li><div>#</div></li>
                    </ul>
                </div>
              
            </div>          
               <div><span>这是一条消息</span></div> 
        </div>
    </li>
    <li></li>
    <li></li>
</ul>
</div>
</template>
<script>


export default {
  components: {
     
      
  },
   data(){
      return {
        backgroundDiv: {
           
        }
    }
  },
  methods:{
      cache(){
      },
      alert(){
      }
  }
}
</script>

<style scoped>
 .row{
     height: 220px;
     width: 100%;
     background-color: #515a6e;
     z-index: 10;
     color: #fff;
 }
 .input:hover{
     border: #2B81BE;
 }
 .input{
    display: inline-block;
    width: 200px;
    height: 30px;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
 
    position: relative;
    left: 10px;
    top: 5px;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
 }
 .inputli{
     float: left;
 }
 .inputli+li i{
     font-size: 40px;
     position: relative;
     left: 40px;
     color: #fff;
     float: left;
 }
.row > ul{
    display: inline;   
}
.row > ul>li:nth-child(1){
   width: 300px;
   height: 220px;
}
.dialpane{
    width: 100%;
    height: 100%;
   
}
.dialpane>div:nth-child(1){
    height: 40px !important;
}
.dialpane>div:nth-child(2){
    height:140px !important;  
}
.dialpane>div:nth-child(3){
    height:30px !important;  
    line-height: 30px;
    text-align: left;
}
.dialpane>div:nth-child(3) span{
  width: 100%;
  text-align: left;
  float: left;
  margin-left: 10px;
}
.number{
    width: 240px;
}
.number div{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: #fff solid 1px;
    line-height: 40px;
}
.number li{
   display: inline;
   float:left;
   margin-left: 12px;
   margin-bottom: 10px;
}
</style>
<style>

</style>