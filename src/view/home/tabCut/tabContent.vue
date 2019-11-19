<template>
    <div class="tabConten">
        <item v-for="(item) in homeGoods[cli]" :key="item.id" :item="item">

        </item>
        
    </div>
</template>
<script>
import item from './tabContentItem.vue'

import axios from '../../../network/network'
export default {
    components:{
        item
    },
    props:{
        cli:{
            type:Number,
            required:true
        }
    },
    data(){
        return{
            homeGoods:[[],[],[],[]],
            
        }
    },
    created(){
        axios({
            url:'/api/homeGoods'
        }).then((data)=>{
            
            data.forEach(item => {
                this.homeGoods[item.class].push(item)
            });
            
        })
    }
}
</script>
<style lang="scss" scoped>
    .tabConten{
        overflow: hidden;
    }
</style>