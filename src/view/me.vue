<template>
   
   <div class="me">
        <logme-header><span slot="input">{{mag}}</span></logme-header>
       <router-view>
           
       </router-view>
       
   </div>
</template>
<script>
import login from './me/mianLogin.vue';
import logmeHeader from './claLogHeader.vue';
export default {
    data(){
        return {
            mag:'登录'
        }
    },
    components:{
        logmeHeader,
        login
    },
    activated(){
        this.$router.replace({
            path:'/me/login'
        })
    },
    watch:{
        '$route':{
            handler(){
            if(this.$route.path==='/me/singin'){
                this.mag='注册'
            }else{
                this.mag='登录'
            }
            },
            deep:true
        }
    }
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
            width: 50px;
            line-height: 50px;
        }
    }
    
</style>