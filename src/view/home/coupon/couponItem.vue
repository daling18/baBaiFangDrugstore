<template>
    <div class="item">
        <div class="left">
            <span>优惠券</span>
            <p>
                ¥
                <slot name="price"><span>10</span></slot>
            </p>
        </div>
        <div class="right">
            <slot name="compon">
                <p class="store_name">
                    广州善邻药业
                </p>
            </slot>
            <slot name="man">
                <span>
                    满800元使用
                </span>
            </slot>
            <slot name="ling">
                <div>
                    点击领取
                </div>
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .item{
        width: 50%;
        padding: 0 .5rem;
        position: relative;
        overflow: hidden;
        display: flex;
        div{
            box-sizing: border-box;
            padding: .5rem;
            height: 80px;
        }
        .left{
            position: relative;
            width: 40%;
            max-width: 40%;
            color: #fff;
            background: url(http://m.800pharm.com/images/wap/coupon_bg.png) no-repeat;
            background-size: 100% 100%;
            >span{
                color: #fff;
            }
            >p{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-top: 1rem;
                >span{
                    font-size: 2.1rem;
                }
            }
        }
        .right{
            border: .1rem solid #cd0183;
            border-radius: 0 3px 3px 0;
            padding-right: 30px;
            p{
                font-size: 1.2rem;
                font-weight: 600;
                overflow: hidden;
                line-height: 1.5rem;
                height: 1.5rem;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            span{
                font-size: 1rem;
                display: block;
                padding-top: .1rem;
                overflow: hidden;
                line-height: 1.5rem;
                height: 1.5rem;
                white-space: nowrap;
                text-overflow: ellipsis;


            }
            div{
               
                font-size: 1rem;
                color: #cf0180;
                border-radius: 0.8rem;
                border: 1px solid #cf0180;
                height: 1.6rem;
                line-height: 1.6rem;
                width: -webkit-fit-content;
                width: fit-content;
                padding: 0 6px;
                margin-top: .3rem
            }
        }
    }
</style>