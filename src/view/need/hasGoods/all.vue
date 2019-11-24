<template>
    <div class="all">
        <a class="left" href="javascript:;">
            <input type="checkbox">
        </a>
        <a class="center" href="javascript:;">
            全选
        </a>
        <a class="right" href="javascript:;">
            编辑
        </a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .all{
        position: relative;
        background: #fff;
        padding: 0 10px;
        overflow: hidden;
        .left{
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
            line-height: 45px;
            height: 45px;
            width: 35px;
            font-size: 16px;
            text-align: center;
            color: #e9002e;
        }
        .center{
            display: block;
            padding: 0 40px 0 0;
            margin-left: 25px;
            font-size: 15px;
            overflow: hidden;
            line-height: 45px;
            height: 45px;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #444;
        }
        .right{
            position: absolute;
            right: 10px;
            top: 0;
            z-index: 2;
            width: 30px;
            height: 45px;
            line-height: 45px;
            font-size: 15px;
            color: #444;
        }
    }
    
</style>
