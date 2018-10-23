<template>
    <div class="cloudInteractive-box">
        <HeaderC :title='title'></HeaderC>
        <div class="cloudInteractive-content">
            <div class="item" v-for="(item,index) in interactiveData" :key="index">
                <div class="user-message">
                    <div class="flex">
                        <div class="avatar-box">
                            <img :src="item.header" class="avatar-active">
                        </div>
                        
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
                    <router-link :to="{path:'/activedetail',query:{content:item.content,currentTime:item.currentTime,forumId:item.forumId,header:item.header,username:item.username}}">
                    回复</router-link>
                    <img src="../style/cloudInteractive/消息.png" >
                </div>
            </div>
        </div>
        <div class="add-talk-button" @click="this.handlerelaase" ></div> 
        <div  class="add-talk-box"  v-if="showInput" @click.stop>
            <div @click="this.handleCansel" class="cansel-box" ref="mask" ></div>
            <div class="container">
                <textarea type="text" class="input-box" v-model="addActiveUpData.content" ></textarea>
                <div class="bpttom-btn-box">
                    <div class="release-btn" @click="this.addActive" >发布</div>
                    <div class="cansel-btn" @click="this.handleCansel">取消</div>
                </div>
            </div>
        </div>
        <div class="edital-bottom-line">
            <span>我是有底线的,喵~~~</span>
        </div>       
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
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
            interactiveData:[],
            showInput:false,
            addActiveUpData:{
                content:'',
                type:1
            },
            username:''
        }
    },
    methods:{
        getData(){
            this.$axios.get('/forum/forumList.do',this.formData).then(res=>{
                console.log(res)
                this.interactiveData = res.rows
            })
        },
        addActive(){
            
            this.$axios.fetch('post','/forum/saveForum.do',this.addActiveUpData).then(res=>{
                console.log(res)
                Toast(res.msg);
                this.getData()
                this.handleCansel()
            })
        },
        handlerelaase(){
            this.showInput = true
            // document.documentElement.style.overflow = 'hidden'
            // console.log(this.$refs)
            // this.$refs.mask.addEventListener('touchmove',e=>{e.preventDefault()})
        },
        handleCansel(){
            this.showInput = false
            // document.documentElement.style.overflow = 'auto'
        },
        toActiveDetail(){
            console.log( $event.currentTarget.dataset.link)
            // this.$router.push({path:'/activedetail',qurey:{}})
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
                .avatar-box{
                    width: 0.67rem;
                    height: 0.67rem;
                    
                    padding-right: 0.1rem;
                .avatar-active{
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    
                    }
                }
                .user-massage-box{
                        
                    .username{
                        display: block;
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
                a{
                    display: block;
                    font-size: 0.3rem;
                    color: #000;
                }
                img{
                    display: block;
                    width: 0.32rem;
                    height: 0.36rem;
                    padding-right: 0.1rem;
                }
            }
        }    
    }
    .add-talk-button{
        position: fixed;
        right: 0.2rem;
        bottom: 1.2rem;
        width: 1.12rem;
        height: 1.12rem;
        background: url('../style/cloudInteractive/发布btn.png');
        background-size: 1.12rem 1.12rem;
        background-repeat: no-repeat;
    } 
    .add-talk-box{
        position: fixed;
        z-index: 998;
        height: 100vh;
        right: 0;
        bottom: 0;
        left: 0;
        top: 0;
       
        margin-bottom: 2.82rem;
        .cansel-box{
            height: 79vh;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .container{
            position: absolute;
            bottom: 0rem;
            left: 0;
            right: 0;
            height: 2.82rem;
            padding: 0.2rem;
            background-color: #f1f1f1;
            z-index: 998;
            .input-box{
                width: 100%;
                height: 1.96rem;
                display: block;
                border-color: transparent;
                overflow: hidden;
                font-size: 0.5rem;
                outline: none;
            }
            .bpttom-btn-box{
               
                display: flex;
                justify-content: space-between;
                font-size: 0.2rem;
                padding-top: 0.2rem;
                .release-btn{
                    color: #fff;
                    background-color: #ef473a;
                    width: 0.68rem;
                    height: 0.6rem;
                    line-height: 0.6rem;
                    text-align: center;
                    border-radius: 0.08rem;
                }
                .cansel-btn{
                    color: #444;
                    background-color: #f8f8f8;
                    width: 0.68rem;
                    height: 0.6rem;
                    line-height: 0.6rem;
                    text-align: center;
                    border-radius: 0.08rem;
                }
            }
        }
    } 
    .edital-bottom-line{
            height: 0.7rem;
            background-color: #eee;
            span{
                font-size: 0.3rem;
                display: block;
                height: 0.7rem;
                line-height: 0.5rem;
                width: 100%;
                text-align: center;
                color: #666;
            }
        }  
}
</style>


