<template>
    <div>
        <a :href="`http://m.800pharm.com/product-${item.id}.html`">
            <img :src="item.imgUrl" alt="">
            <p class="title">{{item.describe}}</p>
            <p class="price">
               ¥
               <big>
                   {{item.nowPrice}}
               </big>
               <span>
                   ¥
                   <del>
                       {{item.deletePrice}}
                   </del>
               </span>
            </p>
        </a>
    </div>
</template>
<script>
export default {
    props:{
        item:{
            type:Object,
            required:true
        }
    }
}
</script>
<style lang="scss" scoped>
    div{
        float: left;
        width: 50%;
        box-sizing: border-box;
        border-right: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
        a{
            display: block;
            padding: 1rem;
        img{
            max-width: 100%;
            max-height: 220px;
            vertical-align: middle;
        }
        .price{
            color: #e60e40;
            big{
                font-size: 1.6rem;
                
            }
            span{
                color: #999;
                margin-left: 6px;
                del{
                    font-size: 1.3rem;
                }
            }
        }
        .title{
            overflow: hidden;
            line-height: 1.6rem;
            height: 1.6rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #333;
            font-size: 1.3rem;
        }
        }
    }
</style>