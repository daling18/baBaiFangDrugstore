<template>
    <div class="listnav">
        <a href="" class="zong">综合排序</a>
        <a href="" class="volume">销量优先</a>
        <a href="" class="filter">筛选</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .listnav{
        overflow: hidden;
        
        a{
            display: block;
            width: 33.3%;
            text-decoration: none;
            background-color: #fff;
            height: 42px;
            line-height: 42px;
            border-right: 1px solid #f5f3f1;
            text-align: center;
            float: left;
            font-size: 14px;
            box-sizing: border-box;
            color: #333;
        }
        a.volume{
            position: relative;
            &::before,&::after{
                position: absolute;
                right: 5px;
                content: '';
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
            }
            &::before{
                top: 16px;
                border-bottom: 5px solid #888;
            }
            &::after{
                top: 22px;
                border-top: 5px solid #888;
            }
        }
        a.filter{
            border-right: none;
            position: relative;
            &::before{
                 content: '';
                top: 17px;
                right: 10px;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid #888;
                position: absolute;
               
            }
            &::after{
                position: absolute;
                content: '';
                top: 18px;
                right: 14px;
                width: 3px;
                height: 8px;
                background: #888;
                transform: skew(0, -35deg);
            }
        }
    }
</style>