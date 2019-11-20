<template>
    <div class="rentry">
        <ul>
            <item></item>
            <item></item>
            <item></item>
            <item></item>
        </ul>
    </div>
</template>
<script>
import item from './recentlyItem.vue';
export default {
    components:{
        item
    }
}
</script>
<style lang="scss" scoped>
    div.rentry{
        border-top: 1px solid #e3e3e3;
        padding: 10px 15px;
        background: #fff;
        ul{
            width: 100%;
            overflow: hidden;
        }
    }
</style>