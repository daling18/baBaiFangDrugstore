<template>
    <div class="hotSearch">
        <div class="title">大家都在搜</div>
        <div class="key">
            <a v-for="(item,index) in arr" :key="index">{{item}}</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                '金戈',
                '益安宁丸',
                '万艾可 伟哥',
                '金克槐耳',
                '恩必普',
                '拜新同',
                '维力青',
                '肾宝片大瓶装'
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .title{
        padding: 5px 10px;
        color: #5f5f5f;
        background: #f5f3f1;
        font-weight: bold;
        font-size: 14px;
    }
    .key{   
            background-color: #fff;
            padding: 0 10px 10px;
                font-size: 12px;
            a{
                margin: 10px 5px 0 0;
                display: inline-block;
                line-height: 26px;
                padding: 0 15px;
                border: 1px solid #dedede;
                border-radius: 14px;
                text-decoration: none;
                color: #444;
            }
    }
</style>