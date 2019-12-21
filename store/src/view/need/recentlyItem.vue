<template>
    <li>
        <a @click.prevent="click">
            <div class="goods-img">
                <img :src="itemData.imgUrl" alt="">
            </div>
            <div class="goods-title">{{itemData.name}}</div>
            <div class="goods-price">{{itemData.nowPrice}}</div>
        </a>
    </li>
</template>
<script>
export default {
    props:{
        itemData:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods:{
        click(){
            this.$router.push({
                path:`/details?id=${this.itemData.id}`
            })
        }
    }
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