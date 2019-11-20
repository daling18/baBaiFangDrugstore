<template>
    <div class="history">
        <div class="title">
            <span>最近搜索</span>
            <a href="javascript:;">清除</a>
        </div>
        <div class="cone">
            <a href="">大豆磷脂软胶囊</a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .history{
        background-color: #fff;
    }
    .title{
        justify-content: space-between;
        padding: 5px 18px;
        border-bottom: 1px solid #dedede;
        font-size: 14px;
        color: #5f5f5f;
        display: flex;
        span{
            font-weight: bold;
            font-size: 14px;
            color: #5f5f5f;
        }
        a{
            color: #00479c;
        }
    }
    .cone{
        padding: 0 10px 10px;
        min-height: 130px;
        a{
            margin: 10px 5px 0 0;
            display: inline-block;
            line-height: 26px;
            padding: 0 15px;
            border: 1px solid #dedede;
            border-radius: 14px;
            text-decoration: none;
            color: #444;
            font-size: 12px;
        }
    }
</style>