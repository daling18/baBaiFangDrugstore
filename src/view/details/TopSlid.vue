<template>
    <div :class="{TopSlid:true,active:slide}" @click.stop=";">
        <div class="top">
            <p>活动详情</p>
            <i @click="iclick"></i>
        </div>
        <div class="mains">
            <div class="box">
                <p>领取优惠券</p>
                <ul>
                    <item></item>
                    <item></item>
                    <item></item>
                    <item></item>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import item from './Topslid/slidItem.vue';
export default {
    components:{
        item
    },
    props:{
        slide:{
            type:Boolean,
            required:true
        }
    },
    methods:{
        iclick(){
            this.$emit('shde')
        }
    }
}
</script>
<style lang="scss" scoped>
    .TopSlid{
        transition: all 0.6s ease-in-out;
        width: 100%;
        overflow: hidden;
        background: #fff;
        position: fixed;
        bottom: -100%;
        left: 0;
        z-index: 25;
        padding-bottom: 20px;
        .top{
                padding-left: 10px;
            height: 40px;
            line-height: 40px;
            background: #ebebeb;
            position: relative;
            border-bottom: 1px solid #ddd;
            p{
            font-size: 1.6rem;
            color: #222;
            }
            i{
                display: block;
                position: absolute;
                right: 5%;
                top: 5px;
                background: url(http://m.800pharm.com/images/wap/close.png) no-repeat center center;
                background-size: 80%;
                width: 30px;
                height: 30px;
            }
        }
        .mains{
            padding: 1rem 3% 0 3%;
            max-height: 300px;
            overflow-y: auto;
            .box{
                padding-bottom: .5rem;
                margin-bottom: .7rem;
            }
        }
        
    }
    .TopSlid.active{
        z-index: 1000;
        bottom: 0px;
    }
</style>