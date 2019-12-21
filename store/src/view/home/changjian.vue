<template>
    <div class="changjian">
        <Changtitle><img src="http://m.800pharm.com/images/wap/item_title03.png" alt=""></Changtitle>
        <changjian-contemt></changjian-contemt>
    </div>
</template>
<script>
import Changtitle from './Imgtitele.vue'
import changjianContemt from './cahngjian/changjianContent.vue'
export default {
    components:{
        Changtitle,
        changjianContemt
    }
}
</script>
<style lang="scss" scoped>
    .changjian{
        border-bottom: 1rem solid #F5F5F5;
    }
</style>