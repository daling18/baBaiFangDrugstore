<template>
     <div class="header">
           <class-header>
                <a href="" slot="left" class="left" @click.prevent="back"></a>
                <slot slot="center" name="input"></slot>
                <div slot="right" class="right">
                    <a href="" class="kefu"></a>
                    <a href="" class="daohang" @click.prevent="frag=!frag"></a>
                </div>
                <slot name="detailsHot" slot="detailsHot"></slot>
            </class-header>
            <slot><class-nav v-show="frag"></class-nav></slot>
       </div>
</template>
<script>
import classNav from './classfig/classNav.vue';
import classHeader from './header.vue';
export default {
    components:{
        classHeader,
         classNav
    },
    data(){
        return{
             frag:false
        }
    },
    methods:{
        back(){
           
            if(this.$store.state.name&&this.$route.path==='/me/logSucceed'){
                
                this.$router.push({
                    path:'/home'
                })
            }else{
                 console.log(this.$route.path,this.$store.state.name)
                this.$router.go(-1)
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .header{
        background-color: #00479c;
        position: sticky;
        top: 0;
        z-index: 2;
        
        div.right{
           position: absolute;
        //    overflow: hidden;
            right: 1rem;
            top: .8rem;
            width: 60px;
            height: 30px
        }
        a.daohang{
            display: block;
            width: 30px;
            height: 30px;
            float: left;
            background: url(http://m.800pharm.com/images/wap/header.png) no-repeat;
            background-size: 150px 25px;
            background-position: -123px 3px;
        }
        a.kefu{
            display: block;
            width: 30px;
            height: 30px;
            float: left;
            background: url(http://m.800pharm.com/images/wap/header.png) no-repeat;
            background-size: 150px 25px;
            background-position: -97px 3px;
        }
        a.left{
            position: absolute;
            top: 1rem;
            left: 1rem;
            width: 27px;
            height: 27px;
            background: url(http://m.800pharm.com/images/wap/header.png) no-repeat;
            background-size: 150px 25px;
            background-position: -75px 1px;
        }
        
    }
        
</style>