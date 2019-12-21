<template>
    <div class="zong">
        <div class="price">
            <p class="jia">
                合计：
                <span class="">¥446.00</span>
            </p>
            <p class="text">不含运费</p>
        </div>
        <div class="post">提交预定({{$store.state.car.length}})</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .zong{
        position: fixed;
        bottom: 60px;
        left: 0;
        right: 0;
        z-index: 10;
        height: 50px;
        background: #fff;
        padding: 0 0 0 55px;
        font-size: 14px;
  
        display: flex;
        justify-content: flex-end;
        align-items: center;
        div.price{
            width: 104px;
            padding: 7px 10px 0 0;
            text-align: right;
            .text{
                color: #999;
                font-size: 12px;
            }
            .jia{
                text-align: right;
                span{
                    font-size: 15px;
                    color: #e9062c;
                }
            }
        }
        div.post{
            // width: px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: #e6186e;
            color: #fff;
            padding: 0 30px;
        }
    }
</style>