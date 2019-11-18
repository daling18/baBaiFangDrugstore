<template>
    <div class="buying_pro_wrapper">
        <ul>
            <item></item>
            <item></item>
            <item></item>
            <item></item>
            <item></item>
        </ul>
    </div>
</template>
<script>
import item from './buying_pro_wrapper/buyingPwrappeItem.vue'
export default {
    components:{
        item
    }
}
</script>
<style lang="scss" scoped>
    .buying_pro_wrapper{
        overflow-x: auto;
        &::-webkit-scrollbar {
            display: none;
        }
        ul{
            width: 1000px;
            display: block;
            padding: 1rem 1.5rem;
            overflow: hidden;
            overflow-x: auto
        }
    }
</style>