<template>
   
   <div class="me">
        <logme-header><span slot="input">{{$route.meta.tite}}</span></logme-header>
       <router-view>
           
       </router-view>
       
   </div>
</template>
<script>
import login from './me/mianLogin.vue';
import logmeHeader from './claLogHeader.vue';
import createdMixin from '../mixin/createdMixin';
export default {

    mixins:[createdMixin],
    components:{
        logmeHeader,
        login
    },
}   
</script>
<style lang="scss" scoped>
    .me{
        height:100%;
        width: 100%;
        background-color: #f0f3f5;
        span{
            font-size: 1.6rem;
            color: #fff;
            display: block;
            height: 50px;
            width: 80px;
            line-height: 50px;
        }
    }
    
</style>