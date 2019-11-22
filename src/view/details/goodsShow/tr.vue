<template>
    <tr :style="{display:show?'table-row':'none'}">
        <td width="70" class="title">{{dataobj.tit}}</td>
        <td class="dir">{{dataobj.info}}</td>
    </tr>
</template>
<script>
export default {
    props:{
        dataobj:{
            type:Object,
            required:true
        },
        show:{
            type:Boolean,
            require:true
        }
    }
}
</script>
<style lang="scss" scoped>
    td{
        padding: .5rem .2rem;
        vertical-align: top;
        border-bottom: 1px dotted #cccccc;
        font-size: 1.4rem;
    }
    td.title{
        color: #999999;
    }
     td.dir{
        color: #666666;
    }
</style>