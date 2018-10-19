<template>
    <div class="activedetail-p-box">
        <HeaderC :title="'党员云互动'" ></HeaderC>
        <div class="activedetail-container">
            <div style="height:0.2rem"></div>
            <div class="user-box">
                <div class="user-massage" >
                    <div class="avatar-box">
                        <img src="../style/cloudInteractive/头像.png" class="avatar">
                    </div>
                    <div class="message">
                        <span class="username">名字</span>
                        <div class="date-box">
                            <img src="../style/cloudInteractive/时间.png" >
                            <span class="date">2071564815353</span>
                        </div>
                    </div>
                </div>
                <span class="user-talk">我自横刀向天笑。。。。。。。</span>
            </div>
            <!-- <div class="answer-box">
                <div class="item-user-box">
                    <div class="item-user-message" >
                        <div class="item-avatar-box">
                            <img src="../style/cloudInteractive/头像.png" class="item-avatar">
                        </div>
                        <div class="item-message">
                            <span class="item-username">名字</span>
                            <div class="item-date-box">
                                <img src="../style/cloudInteractive/时间.png" >
                                <span class="item-date"></span>
                            </div>
                        </div>
                    </div>
                    <span class="item-user-talk">我不想写了</span>
                </div>
            </div> -->
            <div class="center-line"></div>
            <div class="user-box" style="margin:-0.02rem 0 0 0 ; border-top:none; border-left:none; border-right:none ">
                <div class="user-massage" >
                    <div class="avatar-box">
                        <img src="../style/cloudInteractive/头像.png" class="avatar">
                    </div>
                    <div class="message">
                        <span class="username">名字</span>
                        <div class="date-box">
                            <img src="../style/cloudInteractive/时间.png" >
                            <span class="date">2071564815353</span>
                        </div>
                    </div>
                </div>
                <span class="user-talk">我自横刀向天笑。。。。。。。</span>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        getuserData(){
            console.log(this.$route.query)
        }
    },
    created(){
        this.getuserData()
    }
}
</script>
<style lang="scss" scoped>
.activedetail-p-box{
    .activedetail-container{
        background-color: #efeff4;
        .center-line{
            width: 100%;
            height: 0.03rem;
            background-color: #ddd;
        }
        .user-box{
            margin: 0.18rem;
            margin-top: -0.02rem;
            padding: 0.32rem;
            background-color: #fff;
            border: 0.02rem solid #ddd;
            
            .user-massage{
                display: flex;
                height: 0.92rem;
                .avatar-box{
                    width: 0.67rem;
                    height: 0.67rem;
                    .avatar{
                        display: block;
                        width: 0.67rem;
                        height: 0.67rem;
                        border-radius: 50%;
                    }
                }
                .message{
                    padding-left: 0.2rem;
                    .username{
                        display: block;
                        font-size: 0.3rem;
                    }
                    .date-box{
                        display: flex;
                        img{
                            display: block;
                            width: 0.28rem;
                            height: 0.24rem;
                            margin: 0.04rem 0.2rem 0 0;
                        }
                        .date{
                            display: block;
                            font-size: 0.24rem;

                        }
                    }
                }
            }
            .user-talk{
                padding: 0.2rem 0 ;
                display: block;
                font-size: 0.3rem;
            }
        }
        .answer-box{
            .item-user-box{
                
            }
        }
    }
}
</style>
