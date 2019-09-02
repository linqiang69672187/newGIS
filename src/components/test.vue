<template>
    <div>
        <transition name='fade' @before-enter='handlebeforeEnter' @enter='handleEnter' @after-enter='handleafterEnter'>
            <p v-show='jsshow'>js动画</p>
        </transition>
        <button @click="handlejsClick">切换js动画</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                jsshow:true
            }
        },
        methods:{
            handlejsClick(){
                this.jsshow=!this.jsshow;
            },
            handlebeforeEnter(el){
                el.style.opacity=0
            },
            handleEnter(el,done){
                console.log("before结束了执行了enter")
                Velocity(el,{opacity:1},{duration:3000,complete: done})
                //原理跟上面一样，只是函数的变化方法不一样，这里的 complete: done跟上面的回调函数同理，一定要写，不然不会触发handleafterEnter函数
            },
            handleafterEnter(el){
                el.style.color='red'
            }
        },
    }
</script>