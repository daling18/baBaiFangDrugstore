<template>
    <dl>
       <slot name="dt">
            
       </slot>
       <slot name="dd">
           <dd class="prices">
                <i></i>
                <span class="cxj">¥1029</span>
                <span class="yj">¥1500</span>
                <span class="pay">货到付款</span>
            </dd>
       </slot>
    </dl>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    dl{
        position: relative;
        overflow: hidden;
        line-height: 18px;
        dt{
            width: 38px;
            float: left;
            clear: left;
            color: #999;
            padding-bottom: 10px;
            margin-right: 4px;
            font-size: 1.4rem;
        }
        dd{
            float: left;
            color: #999;
            padding-bottom: 8px;
            font-size: 62.5%;
            i{
                display: inline-block;
                width: 16px;
                height: 16px;
                background: url(http://m.800pharm.com/images/wap/details-compound-1.png) no-repeat left center;
                background-size: 26%;
                background-position: -91px 1px;
                background-size: 280px auto;
            }
            span{
                color: #999;
            }
            .cxj{
                font-size: 1.6rem;
                color: #eb0b30;
                margin-right: 3px;
                background-size: 26%;
            }
            .yj{
                font-size: 1.2rem;
                text-decoration: line-through;
                margin-right: 3px;
            }
            .pay{
                font-size: 1rem;
                padding: 0 4px;
                color: #fff;
                background-color: #c6b8ac;
                border-radius: 3px;
            }
        }
    }
</style>