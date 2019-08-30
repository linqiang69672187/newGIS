<template>
<div class="row">
    <Tree :data="data3" :load-data="loadData" show-checkbox></Tree>
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
                        children: []
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
                            children: []
                        },
                        {
                            title: '朱警官',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            }
        }
    }
</script>
<style scoped>
.row{
margin: 0px;
width: 200px;
text-align: left;
padding-left: 5px;
color: #000;
}

</style>