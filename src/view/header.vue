<template>
   
    <div class="header">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}   
</script>
<style lang="scss" scoped>
    .header{
        height: 50px;
        display: flex;
        // background-color: blue;
        
        .left{
            width: 48px;
            position: relative;
        }
        .right{
            width: 60px;
             position: relative;
        }
        .center{
            flex: 1;
             position: relative;
             input[type=text]{
                border: none;
                background-color: #fff;
                color: #666;
                // width: 100%;
                width: 258px;
                height: 34px;
                padding: 0 12px;
                line-height: 24px;
                font-size: 1.4rem;
                border-radius: 2px;
                // -ms-box-sizing: border-box;
                // box-sizing: border-box;
                outline: none;
                font-family: 'Microsoft YaHei';
                vertical-align: middle;
                margin-top: 8px;
            }
        }
    }
</style>