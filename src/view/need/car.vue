<template>
    <div class="car">
        <p class="first-point-text">主人，购物车还是空空的</p>
        <p class="btn-box"><a href="">去购物</a></p>
        <p class="last-point-text">
            登录后可同步电脑和手机端购物车
            <a href="">登录</a>
        </p>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .car{
        text-align: center;
        font-size: 14px;
        background: #fff;
        border-bottom: 1px solid #e3e3e3;
        p.first-point-text{
            padding: 15px 0;
            color: #999;

        }
        p.btn-box{
            padding-bottom: 20px;
            a{
                display: inline-block;
                padding: 10px 20px;
                color: #fff;
                background: #e6186e;
                border-radius: 3px;
            }
        }
        p.last-point-text{
            color: #666;
            font-size: 13px;
            padding: 15px 0 25px;
            a{
                padding: 2px 10px;
                color: #333;
                border: 1px solid #333;
                border-radius: 3px;
                margin-left: 5px;
            }
        }
    }
</style>