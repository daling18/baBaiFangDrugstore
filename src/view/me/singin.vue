<template>
    <div class="singinInput">
        <singin-input></singin-input>
        <div class="botton"><sing-button>注册</sing-button></div>

    </div>
</template>
<script>
import singinInput from '../../component/input/input.vue';
import singButton from './button.vue';
export default {
    components:{
        singinInput,
        singButton
    }
}
</script>
<style lang="scss" scoped>
    div.singinInput{
        margin-top: 14px;
        >div.botton{
            margin: 0 15px;
            margin-top: 40px;
            // width: 100%;
            outline-style: none;
            // box-sizing: border-box;
            line-height: 40px;
            border: 0 none;
            border-radius: 3px;
            background-color: #e61b74;
            color: #fff;
            height: 40px;
            font-weight: 400;
        }
    }
</style>