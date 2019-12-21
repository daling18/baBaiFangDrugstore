<template>
    <div class="list">
        <item v-for="(item,index) in listData" :key="item.id+index" :itemObj="item"></item>
    </div>
</template>
<script>
import item from './goodlistitem.vue';
import axios from '../../../network/network';
export default {
    components:{
        item
    },
    data(){
        return{
            listData:[]
        }
    },
    computed:{
        carID(){
            return this.$store.state.car
        }
    },
    created(){
        this.carID.forEach((item)=>{
            axios({
                method:'get',
                url:'/api/details',
                params:{
                    id:item.id
                }
            }).then((res)=>{
                this.listData.push(res[0])
            })
        })
    }
}
</script>
<style lang="scss" scoped>

</style>