<template>
    <div class="rentry">
        <ul>
            <item v-for="(item,index) in this.historyData" :key="index" :itemData="item"></item>
        </ul>
    </div>
</template>
<script>
import item from './recentlyItem.vue';

import axios from '../../network/network';
import mixin from '../../mixin/mixin';
export default {
    mixins:[mixin],
    components:{
        item
    },
    data(){
        return{
            historyData:[]
        }
    },
    methods:{
        requset(history){
            history.forEach(element => {
                axios({
                    url:'/api/details',
                    params:{
                        id:element
                    }
                }).then((res)=>{
                    this.historyData.push(res[0])
                })
            });
        }
    },
    created(){
        this.requset(this.getlocalStorage('history'))
        console.log(this.historyData)
    }
}
</script>
<style lang="scss" scoped>
    div.rentry{
        border-top: 1px solid #e3e3e3;
        padding: 10px 15px;
        background: #fff;
        ul{
            width: 100%;
            overflow: hidden;
        }
    }
</style>