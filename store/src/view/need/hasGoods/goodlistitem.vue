<template>
    <div class="item">
        <div class="box">
            <a href="javascript:;"><input type="checkbox"></a>
            <div>
                <div class="img">
                    <img :src="itemObj.imgUrl" alt="">
                </div>
                <div class="info">
                    <a href="">
                        <p class="title">{{itemObj.name}}</p>
                        <p class="type">{{itemObj.type}}1</p>
                    </a>
                    <div class="price">
                        <span>{{itemObj.nowPrice}}</span>
                        <div>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                    </div>
                </div>
                <div class="remove">
                    <span @click="dele(itemObj.id)">删除</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import axios from '../../../network/network';
export default {
    props:{
        itemObj:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods:{
       dele(id){
           MessageBox.confirm('确认删除改商品').then((action,i) => {
               console.log(action,i)
               if(action){
                   axios({
                       method:'post',
                       data:{
                           id
                       },
                       url:'/api/deleCar'
                   }).then((res)=>{
                       if(res===10){
                           MessageBox.alert('删除成功')
                           location.reload()
                           
                       }
                   })
               }
            }).catch((error)=>{
                console.log(error)
            })
       }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        position: relative;
        background: #f7f7f7;
        padding-left: 10px;
        border-bottom: 0;
        >a{
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
            height: 120px;
            line-height: 120px;
            width: 35px;
            font-size: 16px;
            text-align: center;
            color: #e9002e;
        }
        >div{
            position: relative;
            padding-left: 25px;
            font-size: 13px;
            .img{
                position: absolute;
                left: 25px;
                top: 10px;
                z-index: 2;
                width: 85px;
                height: 85px;
                border: 1px solid #eaeaea;
                img{
                    width: 100%;
                    display: block;
                }
            }
            .info{
                padding: 10px 10px 10px 95px;
                padding-right: 10px;
                font-size: 13px;
                a{
                    display: inline-block;
                    color: #4444;
                    .title{
                        max-height: 34px;
                        line-height: 17px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        color: black;
                    }
                    .type{
                        color: #999;
                        overflow: hidden;
                        line-height: 20px;
                        height: 20px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
                .price{
                    >span{
                        display: block;
                        color: #e9002e;
                        font-size: 14px;
                        line-height: 26px;
                    }
                    >div{
                        width: 94px;
                        display: inline-block;
                        border: 1px solid #d0d0d0;
                        border-radius: 3px;
                        background: #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 20px;
                        >span{
                            flex: 1;
                            border-right: 1px solid #ccc;
                            line-height: 20px;
                            text-align: center;
                        }
                    }
                }
            }
            .remove{
                position: absolute;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 16px;
                width: 40px;
                height: 25px;
            }
        }
    }
</style>