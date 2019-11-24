<template>
    <li>
        <a href="" :style="{backgroundTmage:itemObj.img,backgroundSize:itemObj.size}">{{itemObj.text}}</a>
    </li>
</template>
<script>
export default {
    props:{
        itemObj:{
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
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ddd;
        font-size: 1.3rem;
        a{
            display: block;
            padding-left: 30px;
            background-repeat: no-repeat;
            background-position: left center;
            background-size: 15px;
            color: #666;
        }
    }
</style>
