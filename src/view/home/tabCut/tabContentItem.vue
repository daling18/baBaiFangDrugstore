<template>
    <div>
        <a href="">
            <img src="http://img.800pharm.com/images/20191105/20191105140925_41.jpg" alt="">
            <p class="title">他达拉非片 (希爱力) 20毫克*8片</p>
            <p class="price">
               ¥
               <big>
                   589
               </big>
               <span>
                   ¥
                   <del>
                       999
                   </del>
               </span>
            </p>
        </a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    div{
        float: left;
        width: 50%;
        box-sizing: border-box;
        border-right: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
        a{
            display: block;
            padding: 1rem;
        img{
            max-width: 100%;
            max-height: 220px;
            vertical-align: middle;
        }
        .price{
            color: #e60e40;
            big{
                font-size: 1.6rem;
                
            }
            span{
                color: #999;
                margin-left: 6px;
                del{
                    font-size: 1.3rem;
                }
            }
        }
        .title{
            overflow: hidden;
            line-height: 1.6rem;
            height: 1.6rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #333;
            font-size: 1.3rem;
        }
        }
    }
</style>