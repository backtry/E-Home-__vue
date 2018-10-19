<template>
    <div class="personal-box">
        <!-- <HeaderC ></HeaderC> -->
        <div class="header">
            <div class="return-icon" @click="this.returnLastPage">
                <img src='../style/img/drawable-hdpi/返回_btn.png'>
            </div>
            <span>个人中心</span>
        </div>
        <div class="user-box">
            <div class="avatar-box">
                <img :src=" this.$store.state.userData.header" class="avatar" v-if=" this.$store.state.userData.header">
                <img src="../style/img/hekeda.png" class="avatar" v-else>
            </div>
            <span @click="TologinPage">{{userData.username||'你还没登录,请登陆'}}</span>
        </div>
        <div class="personal-methods-box">
            <div class="item">
                <router-link :to=" this.$store.state.userData.username ? '/usermassage' : '/login' ">
                <div class="text-box">
                    <img src="../style/img/person.png" class="icon-l">
                    <span>个人信息</span>
                </div>
                <div>
                     <img src="../style/img/right.png" class="icon">
                </div>
                </router-link>
            </div>
        </div>
        <div class="personal-methods-box">
            <div class="item">
                <router-link to="/personal">
                <div class="text-box">
                    <img src="../style/img/lxjf.png" class="icon-l">
                    <span>个人量化积分</span>
                </div>
                <div>
                     <img src="../style/img/right.png" class="icon">
                </div>
                </router-link>
            </div>
        </div>
        <div class="personal-methods-box">
            <div class="item">
                <router-link to="/personal">
                <div class="text-box">
                    <img src="../style/img/xgmm.png" class="icon-l">
                    <span>修改密码</span>
                </div>
                <div>
                     <img src="../style/img/right.png" class="icon">
                </div>
                </router-link>
            </div>
        </div>
        <div class="personal-methods-box">
            <div class="item">
                <router-link to="/personal">
                <div class="text-box">
                    <img src="../style/img/icon3.png" class="icon-l">
                    <span>党费缴纳</span>
                </div>
                <div>
                     <img src="../style/img/right.png" class="icon">
                </div>
                </router-link>
            </div>
        </div>
        <button class="logout" @click="handleLogout" v-show=" this.$store.state.userData.username">退出登录</button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
   data(){
       return{
           avatar:'../style/img/hekeda.png',

       }
    },
    computed:{
        ...mapState(['userData'])
    },
   methods:{
       returnLastPage(){
           history.go(-1)
       },
       handleLogout(){
           this.$store.commit("GET_USERDATA",{})
           localStorage.removeItem("token")
           this.$router.push('/login')
       },
       TologinPage(){
           this.$router.push('/login')
       }
    }  
}
</script>
<style lang="scss" scoped>
.personal-box{
    margin-bottom: 1rem;
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
    .user-box{
        background-color: #c50206;
        text-align: center;
        padding-top: 0.97rem;
        padding-bottom: 0.2rem;
        .avatar-box{
            margin: 0 auto;
            height: 1.67rem;
            width: 1.67rem;
            

            // background-image: url('../style/img/hekeda.png');
            background-size: 2rem 2rem;
            background-position: -0.25rem -0.25rem; 
            border-radius: 50%;
            background-color: #ddd;
            img{
                display: block;
                text-decoration: none;
                border: 1px solid transparent;
                height: 1.67rem;
                width: 1.67rem;
                border-radius: 50%;
            }
          
        }
          span{
                display: block;
                font-size: 0.2rem;
                color: #ffffff;
                padding-top: 0.1rem;
            }
    }
    .personal-methods-box{
        .item{
                padding: 0 0.2rem;
                border-bottom: 1px solid #bbb;
            a{
                text-decoration: none;
                display: block;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: space-between;
                font-size: 0.33rem;
                height: 1rem;
                color: #666;
                .text-box{
                    display: flex;
                    justify-content: center;
                     span{
                        height: 0.64rem;
                        line-height: 0.64rem;
                        display: block;
                       padding-left: 0.1rem;
                    }
                }
            }
            .icon-l{
                height: 0.64rem;
                width: 0.64rem;
               
            }
            .icon{
                height: 0.34rem;
                
                display: block
            }
        }
    }
     .logout{
        margin: 0 auto ;
        margin-top: 1.5rem;
        display: block;
        width: 6rem;
        height: 0.84rem;
        font-size: 0.3rem;
        background-color: #c50206;
        border: none;
        color: #fff;
        border-radius: 0.1rem;
        border-width: 0;
        }
    .logout:hover{
        border: 1px solid #c50206;
        background-color: #e3574f;
        }
}
</style>
