<template>
    <div class="domain">
        <ul class="flex_box">
            <li class="car"><a href="">购物车<span>({{$store.state.car.length}})</span></a></li>
            <item>
                <span slot="num">0</span>
                积分
            </item>
            <item>
                <span slot="num">3</span>
                红包
            </item>
            <item>
                <span slot="num">4</span>
                优惠券
            </item>
        </ul>
    </div>
</template>
<script>
import item from './domainItem.vue';
export default {
    components:{
        item
    }
}
</script>
<style lang="scss" scoped>
    div.domain{
        padding: 0 15px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        margin-bottom: 10px;
        .flex_box{
            display: flex;
            .car{
                flex: 1.5;
                text-align: left;
                padding: 18px 0 18px 10px;
                box-sizing: border-box;
                font-size: 1.5rem;
                background: url(http://m.800pharm.com/images/wap/line.png) no-repeat right center;
                background-size: 1px 30px;
                a{
                    position: relative;
                    padding-left: 20px;
                    background: url(http://m.800pharm.com/images/wap/cart_icon.png) no-repeat left center;
                    background-size: 16px;
                    color: #666;
                    span{
                        color: red;
                    }
                }
            }
        }
    }
</style>