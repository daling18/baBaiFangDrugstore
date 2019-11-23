<template>
    <a href="">
        <div class="img">
            <img :src="itemData.imgUrl" alt="">
        </div>
        <div class="detail">
            <span class="rx">
                Rx
            </span>
            <p class="goodsName"> {{itemData.name}} </p>
            <p class="merchant">  {{itemData.company}}  </p>
            <p class="type">{{itemData.type}} </p>
            <p class="price"> 
                <span>{{itemData.nowPrice}}</span>起
            </p>
            <p class="standard">
                4家药店发布 >>
            </p>
        </div>
    </a>
</template>
<script>
export default {
    props:{
        itemData:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    a{
        display: block;
        text-decoration: none;
        padding: 20px 3%;
        background-color: #fff;
        margin-bottom: 2px;
        min-height: 90px;
        overflow: hidden;
        position: relative;
        // z-index: 1;
        color: #444;
        cursor: pointer;
        .img{
            width: 100px;
            height: 100px;
            border: 1px solid #ececec;
            position: absolute;
            top: 20px;
            left: 3%;
            z-index: 1;
            overflow: hidden;
            img{
                max-width: 100px;
                max-height: 100px;
                position: relative;
                top: 50%;
                left: 50%;
                transform: translateZ(0) translate(-50%, -50%);
                vertical-align: middle;
            }
        }
        div.detail{
            margin-left: 135px;
            position: relative;
            span.rx{
                position: absolute;
                top: 0;
                left: -30px;
                width: 30px;
                height: 20px;
                line-height: 19px;
                color: #fff;
                border-radius: 50%;
                font-size: 12px;
                display: block;
                transform: scale(0.7, 0.7);
                text-align: center;
                background: #0060f5;
            }
        }
        p.standard{
            color: #999;
            margin-top: 3px;
            position: relative;
            font-weight: bold;
            font-size: 12px;
            &::before{
                content: '';
                position: absolute;
                left: -22px;
                top: 0;
                width: 13px;
                height: 15px;
                background: url(http://m.800pharm.com/images/wap/fz_03.png) no-repeat center center;
                background-size: 100% auto;
            }
        }
        p.goodsName{
            font-size: 14px;
            color: #333;
            max-height: 36px;
            line-height: 18px;
            overflow: hidden;
            
        }
        p.merchant,.type{
            color: #999;
            margin-top: 3px;
            font-size: 12px;
        }
        p.price{
            margin-top: 5px;
            font-size: 15px;
            span{
                margin-right: 5px;
                color: #ff00ba;
            }
        }
    }
</style>