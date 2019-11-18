<template>
    <div>
        <ul>
            <item></item>
        </ul>
    </div>
</template>
<script>
import item from './tabHeaderItem.vue'
export default {
    components:{
        item
    }
}
</script>
<style lang="scss" scoped>
    ul{
        overflow: hidden;
    }
</style>