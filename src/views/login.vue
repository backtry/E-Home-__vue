<template>
    <div class="login-box"> 
       <div class="header">
            <div class="return-icon" @click="this.returnLastPage">
                <img src="../style/img/drawable-hdpi/返回_btn.png">
            </div>
            <span>登录</span>
        </div>
        <img src="../style/img/logo.png" class="login-logo">
        <div class="input-box">
            <input type="text" placeholder="身份证号" class="item">
            <input type="text" placeholder="密码" class="item">
            <button class="btn">登录</button>
        </div>
    </div>    
</template>
<script>
export default {

  methods:{
       returnLastPage(){
           history.go(-1)
       }
   } 
}
</script>
<style lang="scss" scoped>
    .login-box{
        height: 100vh;
        background-color: #c50206;
        .header{
        background-color: #c50206;
        display: flex;
        height: 0.9rem;
        align-items: center;
        .return-icon{
            padding-left: 0.2rem;
            img{
                display: block;
                height: 0.5rem;
            }
        }
        span{
            flex: 1;
            text-align: center;
            padding-right: 0.4rem;
            display: block;
            font-size: 0.4rem;
            color: #ffffff;
        }
    }
        .login-logo{
            display: block;
            width: 203.1px;
            height: 53.86px;
            margin: 30px auto;
        }
        .input-box{
            .item{
                display: block;
                width: 290px;
                height: 42px;
                background-color: #c50206ff;
                border: 1px solid #ff0;
                margin: 0 auto 10px auto;
                padding: 0 5px;
                color: #fff;
                border-radius: 4px;
                font-size: 14px;
                line-height: 42px;
                
            }
            input::-webkit-input-placeholder{
                color: #fff;opacity:1;
                padding-left: 2px;
            }
            .btn{
                margin: 0 auto ;
                display: block;
                width: 300px;
                height: 42px;
                background-color: #e3574f;
                border: none;
                color: #fff;
                border-radius: 5px;
                border-width: 0;
            }
            .btn:hover{
                 border: 1px solid #c50206ff;
                 background-color: #e3574fc9;
            }
        }
    }
</style>
