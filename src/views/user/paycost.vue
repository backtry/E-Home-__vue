<template>
    <div class="paycost-p-box">
        <HeaderC title="缴纳党费"></HeaderC>  
        <div class="paycost-p-container">
            <div class='title'>
                <span>请选择支付方式</span>
            </div>
            <div class="item" @click="this.showWx">
                <div class="logo-box">
                    <img src="@/style/img/微信.png" class="logo">
                    <span>微信</span>
                </div>
                <img src="@/style/img/right.png" class="right">
            </div>
            <div class="item" style="border-top:none" @click="this.showZfb">
                <div class="logo-box">
                    <img src="@/style/img/支付宝支付.png" class="logo">
                    <span>支付宝</span>
                </div>
                <img src="@/style/img/right.png" class="right">
            </div>
        </div>
        <div class="qrcode-box" v-if="wxIsshow" @click="this.showWx">
            <div class="qrcode-content">
                <span>微信支付</span>
                <img src="">
            </div>
        </div>
        <div class="qrcode-box" v-if="zfbIsshow"  @click="this.showZfb">
            <div class="qrcode-content">
                <span>支付宝支付</span>
                <img src="@/style/img/zhifubao.jpg">
            </div>
        </div>  
    </div>    
</template>
<script>
export default {
    data(){
        return{
            wxIsshow:false,
            zfbIsshow:false
        }
    },
    methods:{
        showWx(){
            this.wxIsshow = !this.wxIsshow
        },
        showZfb(){
            this.zfbIsshow = !this.zfbIsshow
        }
    }
}
</script>
<style lang="scss" scoped>
.paycost-p-box{
   .paycost-p-container{
       span,img{display: block;}
       .title{
            font-size: 15px;
            margin: 0.4rem 0 0.2rem;
            span{
                display: block;
            }
       }
       .item{
           display: flex;
           align-items: center;
           justify-content: space-between;
           font-size: 16px;
           color: #444;
           height: 1.2rem;
           padding: 0 0.2rem;
           border: 0.02rem solid #ddd;
           border-left: none;
           border-right: none;
            .logo-box{
                display: flex;
                align-items: center;
                .logo{
                    width: 0.8rem;
                    height: 0.8rem;
                }
                span{
                    line-height: 1.2rem;
                    margin-left: 0.2rem;
                }
            }
            .right{
                width: 0.25rem;
                height: 0.4rem;
            }
       }
   }
   .qrcode-box{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color:rgba(0,0,0,.6);
        display: flex;
        align-items: center;
        justify-content: center;
        .qrcode-content{
            width: 6rem;
            height: 6.8rem;
            span{
                display: block;
                height: 0.8rem;
                line-height: 0.8rem;
                font-size: 0.3rem;
                background-color: #fff;
                font-size: 20px;
                text-align: center;
            }
            img{
                width: 6rem;
                height: 6rem;
                display: block;
            }
        }
   } 
}
</style>
