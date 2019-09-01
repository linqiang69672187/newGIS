<template>
    <div class="toolbox">
        <ul>
            <li><a><div><i class="fas fa-ruler"></i></div></a></li>
            <li><a><div><i class="fas fa-map"></i></div></a></li>
            <li><a><div><i class="fas fa-object-ungroup"></i></div></a></li>
            <li><a><div><i class="fas fa-search-minus"></i></div></a></li>
            <li><a><div><i class="fas fa-search-plus"></i></div></a></li>           
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
    .toolbox{
        height: 36px;
        width: 210px;
        background-color: #164b77;
        border-radius: 18px;
        font-size: 18px;
           line-height: 36px;
    }
    .toolbox>ul,.toolbox>ul>li{
        display: inline-block;
    }

    .toolbox>ul>li{
        width: 32px;
        height: 32px;
      
    }
   .toolbox>ul>li div{
        width: 32px;
        height: 32px;
        line-height: 32px;
    }
   .toolbox>ul>li a{
      color: #fff;
    }
    .toolbox>ul>li:nth-child(2) div{
      background-color: #fff;
      color: #164b77;
      border-radius: 50%;
    }
</style>
