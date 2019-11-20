<template>
    <li>
        <a href="">
            <div class="goods-img">
                <img src="http://img.800pharm.com/images//pms/upload/images/original/072019/16133/bf6f17617d7ac13b766749c7f341d5bd1bc24260.png" alt="">
            </div>
            <div class="goods-title">力合健 一次性使用口罩(粉红）50只</div>
            <div class="goods-price">¥9.9</div>
        </a>
    </li>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    li{
        float: left;
        width: 48%;
        margin-right: 2%;
        margin-bottom: 20px;

        a{
            display: block;
            color: #444;
            text-decoration: none;
            cursor: pointer;
            font-size: 14px;
            text-align: center;
            div.goods-img{
                border: 1px solid #f2f2f2;
                width: 130px;
                height: 130px;
                line-height: 130px;
                margin: 0 auto;
                img{
                    width: 100%;
                    vertical-align: middle;
                }
            }
            div.goods-title{
                margin: 10px 0;
                max-height: 38px;
                line-height: 19px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            div.goods-price{
                color: #e9062c;
            }
        }
    }
</style>