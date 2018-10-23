<template>
    <div class="activedetail-p-box">
        <HeaderC :title="'党员云互动'" ></HeaderC>
        <div class="activedetail-container">
            <div style="height:0.2rem"></div>
            <div class="user-box">
                <div class="user-massage" >
                    <div class="avatar-box">
                        <img :src="userData.header" class="avatar" v-if="userData.header">
                        <img src="../style/cloudInteractive/头像.png" class="avatar" v-else>
                    </div>
                    <div class="message">
                        <span class="username">{{userData.username}}</span>
                        <div class="date-box">
                            <img src="../style/cloudInteractive/时间.png" >
                            <span class="date">{{userData.currentTime}}</span>
                        </div>
                    </div>
                </div>
                <span class="user-talk">{{userData.content}}</span>
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
            <!-- <div class="center-line"></div> -->
            <div class="user-box answer-box-style" v-for="(item,index) in answerData" :key="index" style="margin:-0.02rem 0 0 0 ;" >
                <div class="user-massage" >
                    <div class="avatar-box">
                        <img :src="item.header" class="avatar" v-if="item.header">
                        <img src="../style/cloudInteractive/头像.png" class="avatar" v-else>
                    </div>
                    <div class="message">
                        <span class="username">{{item.username}}</span>
                        <div class="date-box">
                            <img src="../style/cloudInteractive/时间.png" >
                            <span class="date">{{item.timeFormat}}</span>
                        </div>
                    </div>
                </div>
                <span class="user-talk">{{item.comment}}</span>
            </div>
            <div class="user-talk-bottom-line">
                <span>我是有底线的，喵~~~</span>
            </div>
            <div class="active-input-box">
                <label class="item-input-wrapper">
                    <input type="text" placeholder="评论内容" v-model="commentData.comment">
                </label>
                <div class="btn-comment" @click="this.handlecomment">评论</div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            userData:{},
            answerData:[],
            formData:{
                page:1,
                rows:100,
                forum_id:''
            },
            commentData:{
                comment:'',
                forum_id:''
            },
        }
    },
    methods:{
        getuserData(){
            this.userData = this.$route.query
            console.log(this.userData)
        },
        getanswerData(){
            this.formData.forum_id = this.userData.forumId
            this.$axios.get('/forum/forumCommentList.do',this.formData).then(res=>{
                console.log(res)
                this.answerData = res.rows
            })
        },
        handlecomment(){
            this.commentData.forum_id = this.userData.forumId
            this.$axios.fetch('post','/forum/addComment.do',this.commentData).then(res=>{
                console.log(res)
                this.commentData.comment = ''
                this.getanswerData()
            })
        }
    },
    created(){
        this.getuserData()
        this.getanswerData()
    }
}
</script>
<style lang="scss" scoped>
.activedetail-p-box{
    height: 100vh;
    background-color: #efeff4;
    .activedetail-container{
        background-color: #efeff4;
        .answer-box-style{
             border-top:none; border-left:none; border-right:none ;

        }
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
        .user-talk-bottom-line{
            text-align: center;
            font-size: 0.3rem;
            height: 0.4rem;
            line-height: 0.4rem;
            padding: 0.2rem;
            span{
                display: block;
                width: 100%;
                height: 100%;
                color: #666;
            }
        }
        .active-input-box{
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0.16rem;
            display: flex;
            align-items: center;
            height: 0.64rem;
            border: 0.02rem solid #ddd;
            background-color: #fff;

            
            .item-input-wrapper{
                padding: 0 0.16rem;
                display: block;
                flex-grow: 1;
                height: 0.58rem;
                border: 0.02rem solid #c50206;
                border-radius: 0.08rem;
                input{
                    display: block;
                    padding: 0.04rem 0 0.02rem 0.08rem;
                    border: none;
                    width: 100%;
                    height: 0.52rem;
                    outline: none;
                }
            }
            .btn-comment{
                width: 0.48rem;
                height: 0.52rem;
                padding: 0.04rem 0.08rem;
                font-size: 0.2rem;
                line-height: 0.52rem;
                margin-left: 0.2rem;
                background-color: #c50206;
                border-radius: 0.08rem;
                color: #fff;

            }
        }
    }
}
</style>
