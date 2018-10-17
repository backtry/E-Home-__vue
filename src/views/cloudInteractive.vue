<template>
    <div class="cloudInteractive-box">
        <HeaderC :title='title'></HeaderC>
        <div class="cloudInteractive-content">
            <div class="item" v-for="(item,index) in interactiveData" :key="index">
                <div class="user-message">
                    <div class="flex">
                        <img :src="item.header" class="avatar">
                        <div class="user-massage-box">
                            <span class="username">{{item.username}}</span>
                            <div class="date">
                                <img src="../style/cloudInteractive/时间.png" >
                                <span>{{item.currentTime}}</span>
                                <img src="../style/cloudInteractive/声音.png" >
                                <span>公开</span>
                            </div>
                        </div>
                    </div>
                    <!-- <img src="../style/cloudInteractive/党员互动icon.png" class="interactive-logo"> -->
                    <div class="interactive-logo" >党员互动</div>
                </div>
                <div class="message">
                    {{item.content}}
                </div>
                <div class="return-message">
                    <span>回复</span>
                    <img src="../style/cloudInteractive/消息.png" >
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:'党员云互动',
            formData:{
                page:1,
                rows:10,
                type:0,
                cates:0
            },
            interactiveData:[]
        }
    },
    methods:{
        getData(){
            this.$axios.get('/forum/forumList.do',this.formData).then(res=>{
                console.log(res)
                this.interactiveData = res.rows
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>

<style lang="scss" scoped>
.cloudInteractive-box{
    .flex{
        display: flex;
    }
    .cloudInteractive-content{
        span{
            display: block;
            font-size: 0.3rem;
        }
        img{
            display: block;
         
        }
        .item{
            padding: 0.32rem;
            border: 0.01rem solid #ddd;
            border-bottom: 0.2rem solid #eee;
            border-top-left-radius: 0.08rem;
            border-top-left-radius: 0.08rem;
            .user-message{
                display: flex;
                justify-content: space-between;
                height: 0.91rem;
               
                .avatar{
                    display: block;
                    width: 0.67rem;
                    height: 0.67rem;
                    padding-right: 0.1rem;
                    .user-massage-box{
                        
                        .username{
                            display: block;
                        }
                    }
                }
                .interactive-logo{
                    line-height: 0.5rem;
                    text-align: center;
                    height: 0.5rem;
                    width: 1.2rem;
                    font-size: 0.12rem;
                    padding: 0.02rem 0.08rem;
                    color: red;
                    border: 0.01rem solid red;
                    border-radius: 15%/50%;
                }
            }
            .date{
                display: flex;
                align-items: center;
                img{
                    width: 0.2rem;
                    height: 0.2rem;
                    padding-right: 0.1rem;
                }
                span{
                    font-size: 0.2rem;
                     padding-right: 0.1rem;
                }
            }
            .message{
                font-size: 0.3rem;
                padding: 0.2rem 0;
            }
            .return-message{
                display: flex;
                flex-direction: row-reverse;
                img{
                    display: block;
                    width: 0.32rem;
                    height: 0.36rem;
                    padding-right: 0.1rem;
                }
            }
        }    
    }    
}
</style>


