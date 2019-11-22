<template>
    <div class="shopButton">
        <a href="">拨打电话</a>
        <a href="">进店看看</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .shopButton{
        box-sizing: border-box;

        display: flex;
      
        justify-content: space-around;
        padding-bottom: 1rem;
        font-size: 0;
        a{
            box-sizing: border-box;
            display: inline-block;
            min-width: 3.5rem;
            height: 2.6rem;
            line-height: 2.6rem;
            text-align: center;
            font-size: 1.4rem;
            color: #919191;
            padding: 0 1.3rem;
            margin-right: 0.5rem;
            border: 1px solid #bcbcbc;
            border-radius: 1.3rem;
        }
    }
</style>