<template>
    <div class="show">
        <div class="name">
            <h3>广州善邻药业
                <em></em>
            </h3>
            <div>
                <em>店铺综合评分：</em>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="adress">
            广东省广州市
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .show{
        padding-top: 10px;
        padding-bottom: 10px;
        position: relative;
        .name{
            display: block;
            margin-right: 8.5rem;
            position: relative;
            h3{
                position: relative;
                max-width: 100%;
                display: inline-block;
                padding-right: 2rem;
                font-size: 1.7rem;
                color: #303030;
                font-weight: 500;
                overflow: hidden;
                line-height: 1.8rem;
                height: 1.8rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                box-sizing: border-box;
                em{
                    display: block;
                    width: 1.3rem;
                    height: 100%;
                    background: url(http://m.800pharm.com/images/wap/shop_gold.png) no-repeat center;
                    background-size: 100% auto;
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                
            }
            div{
                margin-top: 0.2rem;
                text-align: left;
                font-size: 0;
                vertical-align: middle;
                em{
                    display: inline-block;
                    font-size: 1.3rem;
                    line-height: 1.8rem;
                    color: #919191;
                    font-style: normal;
                }
                span{
                    display: inline-block;
                    width: 1.5rem;
                    height: 1.5rem;
                    background: url(http://m.800pharm.com/images/wap/star_whole_fill.png) no-repeat center;
                    background-size: 100%;
                }
            }
        }
        .adress{
            
            max-width: 8.3rem;
            height: 2rem;
            line-height: 2rem;
            font-size: 1.3rem;
            color: #919191;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            position: absolute;
            right: 0;
            top: 0.4rem;
        }
    }
</style>