<template>
    <div class="buying_pro_wrapper">
        <ul>
            <item v-for="item in slidata" :key="item.id">
                <img :src="item.imgUrl" alt="" slot="img">
                <p slot="title">{{item.describe}}</p>
                <span slot="nowPrice">{{item.nowPrice}}</span>
                <del slot="delPrice">{{item.deletePrice}}</del>
            </item>
        </ul>
    </div>
</template>
<script>
import item from './buying_pro_wrapper/buyingPwrappeItem.vue'

import axios from '../../network/network';
export default {
    components:{
        item
    },
    created(){
        axios({
            url:'/api/slidedata'
        }).then((data)=>{
            // console.log(data)
            this.slidata=data
        })
    },
    data(){
        return{
            slidata:null
        }
    }
}
</script>
<style lang="scss" scoped>
    .buying_pro_wrapper{
        overflow-x: auto;
        &::-webkit-scrollbar {
            display: none;
        }
        ul{
            width: 1000px;
            display: block;
            padding: 1rem 1.5rem;
            overflow: hidden;
            overflow-x: auto
        }
    }
</style>