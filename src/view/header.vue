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
        }
    }
</style>