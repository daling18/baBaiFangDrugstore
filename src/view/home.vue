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
            <div class="slideNav" @touchstart="start" ref="slideNav">
                
                <SlideNav :index="0"></SlideNav>
                <SlideNav :index="1"></SlideNav>
                <SlideNav :index="2"></SlideNav>
            
            </div>
            <Fouce :index="indexNum"></Fouce>
        </div>
        <limit></limit>
        <buying-wrapper></buying-wrapper>
        
   </div>
   
</template>
<script>

import Header from './header.vue'
import SlideNav from './home/slideNav.vue'
import Fouce from './home/focus.vue'
import Limit from './home/limit.vue'
import BuyingWrapper from './home/buying_pro_wrapper.vue'
export default {
    data(){
        return {
            slideNav:null,
            startFrag:'',
            left:'',
            indexNum:0
        }
    },
    methods:{
        
        start(e){
            const div=this.slideNav
            this.startFrag=e.touches[0].screenX
            div.addEventListener('touchmove',this.move)
            div.addEventListener('touchend',this.end)
            div.style.transition='all 0s'
            this.left=parseInt(div.style.left)
        },
        move(e){
            const moveDistance=this.startFrag-e.touches[0].screenX
            this.slideNav.style.left=this.left-moveDistance+'px'
        },
        end(e){
            // console.log(e)
            this.slideNav.style.transition='all 0.3s'
            const moveDistance=this.startFrag-e.changedTouches[0].screenX
            console.log(moveDistance)
            if(Math.abs(moveDistance)>50){  
                
                if(moveDistance<0){
                    this.indexNum--
                }else{
                    this.indexNum++
                }
                if(this.indexNum<0){
                    this.indexNum=0
                    this.slideNav.style.left=this.left+'px'
                }
                if(this.indexNum>2){
                    this.indexNum=2
                    // console.log(this.left)
                    this.slideNav.style.left=this.left+'px'
                }
            }else{
                // console.log(this.left)
                this.slideNav.style.left=this.left+'px'
            }
            
            
        }
    },
    watch:{
        indexNum(){
            console.log(this.indexNum)
            this.slideNav.style.left=this.indexNum*(-414)+'px'
        }
    },
    components:{
        SlideNav,
        Header,
        Fouce,
        Limit,
        BuyingWrapper
    },
    mounted(){
        this.slideNav=this.$refs.slideNav
        this.slideNav.style.left=0+'px'
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
            height: 215px;
            overflow: hidden;
            position: relative;
            border-bottom: 4px solid #F5F5F5;
        }
        .slideNav{
            height: 215px;
            width: 300%;
            display: flex;
            position: absolute;
            top:0;
            left: 0;
            // position: relative;
        }
        
    }
    
</style>