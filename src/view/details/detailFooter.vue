<template>
    <div class="detailFooter">
        <ul>
            <li class="kefu"><a href="">客服</a></li>
            <li class="need"><a href=""><div></div>求单</a></li>
            <li class="add"><span>加入需求清单</span></li>
            <li class="post"><span>提交需求</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    div.detailFooter{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #fff;
        z-index: 10;
        border-top: 1px solid #ccc;
        ul{
            overflow: hidden;
            li{
                float: left;
                height: 50px;
                text-align: center;
                position: relative;
                box-sizing: border-box;
                a{
                    padding-top: 30px;
                    line-height: 20px;
                    color: #444;
                    padding-top: 30px;
                    line-height: 20px;
                }
            }
            .add,.post{
                width: 30%;
                font-size: 1.4rem;
                color: #fff;
                background: #0587f6;
                span{
                    display: block;
                    line-height: 50px;
                    position: relative;
                }
            }
            .post{
                background: #e6186e;
                letter-spacing: .2rem;
            }
            .kefu{
                
                width: 20%;
                background: url(http://m.800pharm.com/images/wap/xiaoneng_icon.png) no-repeat center 5px;
                background-size: auto 50%;
                a{
                    display: block;
                }
                
            }
            .need{
                width: 20%;
                line-height: 20px;
                div{
                    margin: 0 auto;
                    position: relative;
                    background: url(http://m.800pharm.com/images/wap/goods_gwc_icon.png) no-repeat center 7px;
                    background-size: auto 80%;
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
</style>