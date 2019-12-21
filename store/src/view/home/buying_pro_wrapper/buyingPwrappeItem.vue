<template>
    <li>
        <a href="">
            <slot name="img">
                <img src="http://img.800pharm.com/images/20191118/20191118084956_67.jpg" alt="">
            </slot>
            <slot name="title">
                <p>金克 槐耳颗粒 6袋 肝癌 改善肝区疼痛，腹胀，乏力 抗癌肺癌 胃肠癌和 乳腺癌 神疲乏力 少气懒言 脘腹疼痛或胀闷大便干结或溏泄气促咳嗽多痰面色晄白胸痛痰中带血胸胁不适</p>
            </slot>
            <p>
                <slot name="nowPrice">
                    <span>¥75</span>
                </slot>
                <span>
                    / ¥ 
                    <slot name="delPrice">
                        <del>150</del>
                    </slot>
                </span>
            </p>
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
        width: 90px;
        margin-right: 10px;
        a{
            display: block;
            color: #444;
            img{
                padding: 8%;
                width: 84%;
                border: 1px solid #f4f4f4;
                margin-bottom: 3px;
                vertical-align: middle;
            }
            >p{
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-left: 2%;
                &:first-child{
                    font-size: 1.3rem;
                    color: #222;
                    margin-bottom: 5px;
                }
                &:last-child{
                    font-size: 1.3rem;
                    color: #ff0024;
                    span:last-child{
                        font-size: 1.3rem;
                        color: #666;
                    }
                }
            }
        }
    }
</style>