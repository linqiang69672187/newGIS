<template>
    <div class="callbox">
        <ul>
            <li><a><div><i class="fas fa-phone"></i></div></a></li>
            <li><a><div><i class="fas fa-microphone-alt"></i></div></a></li>           
        </ul>
    </div>
</template>
<script>

export default {
    mounted(){
    },
    methods:{
    }

}
</script>
<style scoped>
    .callbox{
        height: 100px;
        width: 100%;
        font-size: 24px;
        line-height: 100px;
    }
    .callbox>ul,.callbox>ul>li{
        display: inline-block;
    }

    .callbox>ul>li{
        width: 40px;
        height: 40px;
        margin-left: 25px;
    }
   .callbox>ul>li div{
        width: 40px;
        height: 40px;
        line-height: 40px;
      
    }
   .toolbox>ul>li a{
      color: #fff;
    }
   .callbox>ul>li:nth-child(2) div{
      background-color: #fff;
      color: #164b77;
      border-radius: 50%;
      border:1px solid #164b77;
    }
   .callbox>ul>li:nth-child(1) div{
      background-color: #164b77;
      color: #fff;
      border-radius: 50%;
      border:1px solid #164b77;
    }
</style>
