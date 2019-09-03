<template>
</template>
<script>
import { Notice  } from 'iview';
let count=0;
    export default {
        components:{
         Notice
        },
        mounted() {
           let that =this;
           Notice.config({
                top: 120,
              //  duration: 30
            });
            setInterval(function (){

                           that.open(false);
                            count+=1;
                        }, 7000);
        },
        methods: {
            open:function (nodesc) {
                switch(count%4){
                    case 0:
                         Notice.info({
                           title: '短信提醒',
                           desc: nodesc ? '' : '张警官24001，已到岗 '
                            });
                        break;
                    case 1:
                        Notice.success({
                           title: '短信发送提醒',
                           desc: nodesc ? '' : '发送成功 '
                            });
                        break;
                    case 2:
                          Notice.warning({
                           title: '告警',
                           desc: nodesc ? '' : '张警官24001，已经越出电子栅栏 '
                            });
                        break;
                    default:
                        Notice.error({
                           title: '错误',
                           desc: nodesc ? '' : '控件注册失败，请联系管理员 '
                            });
                        break;
                }
               
            }
        }
    }
</script>

<style >
.ivu-notice-notice-with-desc{
    background-color: #042657 !important;
    border-radius: 10px  !important;
    color: #fff  !important;
}
.ivu-notice-desc,.ivu-notice-title,.ivu-notice-notice-close i{
    color: #fff  !important;
}
</style>