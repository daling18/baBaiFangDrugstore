<template>
   <div class="home">
       <!-- <down></down> -->
        <div class="header">
            <Header>
                <div slot="left" class="left">
                    <img src="http://m.800pharm.com/images/wap/icon_logo.png" alt="">
                </div>
                <div slot="center" class="center">
                    <input type="text" placeholder="金戈">
                </div>
                <div slot="right" class="right">
                    <a href="">登录</a>
                </div>
            </Header>
        </div>
        <div class="swipe">
            <mt-swipe :auto="1000">
                <mt-swipe-item>
                    <img src="http://img.800pharm.com/images/20190626/20190626102453_151.jpg" alt="">
                </mt-swipe-item>

            </mt-swipe>
        </div>
        <div class="box">
            <div class="slideNav">
                <SlideNav></SlideNav>
                <SlideNav></SlideNav>
                <SlideNav></SlideNav>
            </div>
        </div>
   </div>
   
</template>
<script>

import Header from './header.vue'
import SlideNav from './home/slideNav.vue'
export default {
    data(){
        return {
            
        }
    },
    
    components:{
        SlideNav,
        Header
    }
}   
</script>
<style lang="scss" scoped>
    @import url('../assets/sass/min-swipe.scss');
    .home{
        position: relative;
        
        .left{
            // width: 63px;
            height: 30px;
            position: absolute;
            left: .9rem;
            top: 16px;
            width: 63px;
            img{
                height: 100%;
                width: 100%;
            }
        }
        .header{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1;
        }
        .swipe{
            height: 182px;
            img{
                height: 100%
            }
            >.mint-swipe>.mint-swipe-indicators{
                .mint-swipe-indicator{
                    
                    background-color: #fff;
                    
                }
                
            }
            
        }
        .center{
            margin-left: 38px;
            color: #fff;
            font-size: 1.6rem;
            line-height: 48px;
            input{
                width: 102%;
                height: 34px;
                border-radius: 17px;
                background-color: rgb(255, 255, 255);
                color: #666;
                line-height: 24px;
                font-size: 1.4rem;
                box-sizing: border-box;
                padding: 0 12px;
                // margin-top: -2px
            }
        }
        .right{
            position: absolute;
            right: .9rem;
            top: 1.2rem;
            text-align: right;
            font-size: 1.5rem;
            // line-height: 60px
            a{
                color: #fff
            }
        }
        .box{
            width: 100%;
            overflow: hidden;
        }
        .slideNav{
            height: 215px;
            width: 300%;
            display: flex;
            
            position: relative;
        }
    }
    
</style>