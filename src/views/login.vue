<template>
    <div class="login-box"> 
       <div class="header">
            <div class="return-icon" @click="this.returnLastPage">
                <img src="../style/img/drawable-hdpi/返回_btn.png">
            </div>
            <span>登录</span>
        </div>
        <img src="../style/img/logo.png" class="login-logo">
        <div class="login-input-box">
            <input type="text" placeholder="身份证号" class="item" v-model="loginData.id_card">
            <input type="text" placeholder="密码" class="item" v-model="loginData.password" @keyup.enter="handleLogin" >
            <button class="btn" @click="handleLogin">登录</button>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            loginData:{
                id_card:'1001',
                password:'123456'
            },
        }
    },

  methods:{
        returnLastPage(){
           history.go(-1)
        },
        handleLogin(){
            const userLoginData = this.qs.stringify(this.loginData)
            this.$axios.fetch('post',`/user/userLogin.do?${userLoginData}`,{headers:{"Content-Type": "multipart/form-data; boundary=----WebKitFormBoundarylyUpiMBLY6swze2s"}}).then(res=>{
                if(res.code==1){
                    console.log(res)
                    this.$store.commit("GET_USERDATA",res.data)
                    this.returnLastPage()
                    localStorage.setItem('token', res.token)
                }
            })
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
            width: 4.62rem;
            height: 1.0472rem;
            margin: 0.6rem auto;
        }
        .login-input-box{
            .item{
                display: block;
                width: 5.8rem;
                height: 0.84rem;
                background-color: #c50206ff;
                border: 0.02rem solid #ff0;
                margin: 0 auto 0.2rem auto;
                padding: 0 0.1rem;
                color: #fff;
                border-radius: 0.1rem;
                font-size: 0.28rem;
                line-height: 0.84rem;
                
            }
            input::-webkit-input-placeholder{
                color: #fff;opacity:1;
                padding-left: 0.04rem;
            }
            .btn{
                margin: 0 auto ;
                display: block;
                width: 6rem;
                height: 0.84rem;
                font-size: 0.3rem;
                background-color: #e3574f;
                border: none;
                color: #fff;
                border-radius: 0.1rem;
                border-width: 0;
            }
            .btn:hover{
                 border: 0.02rem solid #c50206ff;
                 background-color: #e3574fc9;
            }
        }
    }
</style>
