<template>
    <li>
        <a href="" :style="{backgroundImage:'url('+backimg.backgroundImage+')'}">
            {{backimg.text}}
        </a>
    </li>
</template>
<script>
export default {
    props:{
        backimg:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    li{
        font-size: 1.3rem;
        text-align: center;
        flex: 1;
        padding: 30px 0 10px 0;
        a{
            position: relative;
            padding: 28px 0 10px;
            color: #999;
            background-repeat: no-repeat;
            background-position: center top;
            background-size: 22px 23px;
        }
    }
</style>