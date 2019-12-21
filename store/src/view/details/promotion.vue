<template>
    <div class="promotion">
        <div class="sames_boxs">
            <div class="s_titles"><slot name="title">促销</slot></div>
            <slot>
                <div class="s_infos">
                    <span class="discounts">
                        优惠券
                    </span>
                </div>
            </slot>
            <i @click="iclick"></i>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        iclick(){
            // console.log(99999)
            this.$emit('iclick')
        }
    }
}
</script>
<style lang="scss" scoped>
    div.promotion{
        padding: 0 3%;
        background: #fff;
        border-top: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
        border-top: 10px solid #F5F5F5;
        font-size: 62.5%;
        div.sames_boxs{
            position: relative;
            line-height: 18px;
            padding: 10px 30px 10px 10px;
            border-bottom: 1px dotted #d0d0d0;
            overflow: hidden;
            background: #fff;
            i{
                background: url(http://m.800pharm.com/images/wap/details-compound-1.png) no-repeat right center;
                background-size: 50%;
                background-position: -192px 7px;
                background-size: 240px auto;
                position: absolute;
                right: 0;
                top: 9px;
                width: 48px;
                height: 22px;
            }
            div.s_titles{
                font-size: 13px;
                color: #959595;
                position: absolute;
                left: 0;
                top: 9px;
            }
            div.s_infos{
                position: relative;
                padding-left: 42px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                height: 18px;
                span.discounts{
                    display: inline-block;
                    padding: 0 5px;
                    margin-right: 3px;
                    color: #fff;
                    background: #fb1959;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    border-radius: 3px;
                }
            }
        }
    }
</style>