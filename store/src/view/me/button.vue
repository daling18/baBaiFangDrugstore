<template>
    
        <button>
            <slot></slot>
        </button>
     
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    button{
        display: inline-block;
        width: 100%;
        height: 36px;
        
        line-height: 36px;
        // color: #333;
        font-size: 1.6rem;
        border-radius: 3px;
        // background-color: #fff;
        outline-style: none;
        font-family:'Microsoft YaHei', 'Helvetica', 'Arial';
        background-color: transparent;
        color: inherit;
        //  border: 1px solid #ccc;
         border: 0;
         a{
             color: #333;
         }
    }
</style>