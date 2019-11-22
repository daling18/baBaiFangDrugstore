<template>
    <li>
        <a href="">
            <div class="prices">
                <span>10</span>
                <em>元</em>
            </div>
            <div class="info">
                <span class="txt">订单满580元减10元</span>
                <span class="times">使用期限：2019.06.22-2019.12.31</span>
            </div>
            <div class="get">
                <div>立即
                    <br>
                    领取</div>
            </div>
        </a>
    </li>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    li{
        margin-bottom: .5rem;
        background: #ea0c45;
        font-size: 1.3rem;
        a{
            color: #fff;
            display: block;
            padding: .8rem 5.1rem .8rem 7rem;
            position: relative;
            outline: none;
            &::after{
                content: '';
                width: 0px;
                height: 100%;
                border-left: 1px dashed #fff;
                position: absolute;
                right: 5rem;
                top: 0;
                z-index: 7;
            }
            &::before{
                content: '';
                background: #fff;
                position: absolute;
                left: -.5rem;
                top: 50%;
                z-index: 7;
                margin-top: -.5rem;
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
            }
            .prices{
                position: absolute;
                left: 1rem;
                top: 50%;
                margin-top: -1.3rem;
                span{
                    font-size: 2.4rem;
                    font-weight: bold;
                }
                em{
                    font-size: 1.6rem;
                }
            }
            .info{
                position: relative;
                line-height: 1.6rem;
                &::before{
                    content: '';
                    background: #fff;
                    position: absolute;
                    right: -.3rem;
                    top: -1.1rem;
                    z-index: 7;
                    width: 0.6rem;
                    height: 0.6rem;
                    border-radius: 50%;
                }
                &::after{
                    content: '';
                    background: #fff;
                    position: absolute;
                    right: -.3rem;
                    bottom: -1.1rem;
                    z-index: 7;
                    width: 0.6rem;
                    height: 0.6rem;
                    border-radius: 50%;
                }
                span{
                    display: block;
                }
                span.times{
                    color: #ff8caa;
                }
            }
            .get{
                width: 5rem;
                height: 100%;
                position: absolute;
                right: 0;
                top: 0;
                z-index: 5;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>