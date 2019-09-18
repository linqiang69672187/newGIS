<template>
    <AutoComplete
        v-model="value4"
        :transfer="transfer"
        icon="ios-search"
        placeholder="input here"
        style="width:300px">
        <div class="demo-auto-complete-item" v-for="item in data4">
            <div class="demo-auto-complete-group">
                <span>{{ item.title }}</span>
               
            </div>
            <Option v-for="option in item.children" :value="option.title" :key="option.title">
                <span class="demo-auto-complete-title">{{ option.title }}</span>
                <span class="demo-auto-complete-count">{{ option.name }} </span>
            </Option>
        </div>
        <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>
    </AutoComplete>
</template>
<script>
import { AutoComplete,Option  } from 'iview';
    export default {
        data () {
            return {
                  value4: '',
                  transfer:false,
                data4: [
                    {
                        title: '个号',
                        children: [
                            {
                                title: '24001',
                                name: '张警官',

                            },
                            {
                                title: '24002',
                                 name: '周警官',

                            }
                        ]
                    },
                    {
                        title: '组号',
                        children: [
                            {
                                title: '899001',
                                name: 'TG1',

                            },
                            {
                                title: '899002',
                                 name: 'TG2',

                            }
                        ]
                    }
                ]
            }
        },
        components:{
            AutoComplete,Option
        },
        methods: {
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            }
        }
    }
</script>
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