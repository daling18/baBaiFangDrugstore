<template>
    <div class="inputs_box">
        <div class="name">
            <slot name="name"></slot>
            <input type="text" id="name" placeholder="请输入您的手机号码/邮箱">
        </div>
        <div class="pass">
            <slot name="pass"></slot>
            <input type="text" id="pass" placeholder="请输入密码" minlength="6" maxlength="16">
            <slot name="eye"></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .inputs_box{
        background-color: #fff;
        padding: 0 15px;
        >div{
            font-size: 1.4rem;
            height: 42px;
            line-height: 42px;
            position: relative;
             color: #333;
            &.name{
                border-bottom: 1px solid #ddd;
            }
            label{
                
                line-height: 42px;
                font-size: 1.4rem;
            }
            input{
                padding-left: 12px;
                margin-top: -3px;
                width: 75%;
                outline-style: none;
                border: 0 none;
                font-family: 'Microsoft YaHei', Helvetica, Arial;
                font-size: 100%;
                font-style: normal;
                vertical-align: middle;
               
            }
            i{  
                background-image: url(http://m.800pharm.com/images/wap/eyes_icon.png);
                display: block;
                position: absolute;
                right: 20px;
                top: 50%;
                margin-top: -10px;
                width: 20px;
                height: 18px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
        }
    }
</style>