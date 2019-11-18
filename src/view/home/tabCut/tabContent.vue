<template>
    <div class="tabConten">
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
 
   
    </div>
</template>
<script>
import item from './tabContentItem.vue'
export default {
    components:{
        item
    }
}
</script>
<style lang="scss" scoped>
    .tabConten{
        overflow: hidden;
    }
</style>