<template>
    <li>
        <a @click.prevent="aclick">{{dataObj.name}}</a>
    </li>
</template>
<script>
export default {
    props:{
        dataObj:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods:{
        aclick(){
            this.$router.push({
                path:'/details',
                query:{
                    id:this.dataObj.id
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    li{
        height: 36px;
        a{
            display: block;
            line-height: 35px;
            font-size: 1.4rem;
            text-decoration: none;
            color: #767676;
            margin: 0 10px;
            border-bottom: 1px solid #f1f1f1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
</style>