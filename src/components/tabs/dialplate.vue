<template>
<div class="row">
<ul>
    <li>
        <div class="dialpane">
            <div>
                <Input class="input" placeholder="输入组号/个号"  />
                   <i class="material-icons">backspace</i>
            </div>
            <div >
                <div class="number">
                    <ul>
                        <li><div>1</div></li>
                        <li><div>1</div></li>
                        <li><div>1</div></li>
                        <li><div>1</div></li>
                        <li><div>1</div></li>
                        <li><div>1</div></li>
                        <li><div>1</div></li>
                        <li><div>1</div></li>
                        <li><div>1</div></li>
                        <li><div>1</div></li>
                        <li><div>1</div></li>
                        <li><div>1</div></li>
                    </ul>
                </div>
                <div></div>
            </div>          
              
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
    background-color: #fff;
    position: absolute;
    left: 10px;
    top: 5px;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
 }
 .input+i{
     font-size: 40px;
     position: relative;
     left: 40px;
     color: #fff;
 }
.row > ul{
    display: inline;   
}
.row > ul>li:nth-child(1){
   width: 400px;
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
    height:160px !important;
    
}
.number{
    width: 200px;
   
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
   margin-left: 15px;
}
</style>
<style>

</style>