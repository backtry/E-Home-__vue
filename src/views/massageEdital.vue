<template>
    <div class="message-edital-box"  >
        <HeaderC :title='title'></HeaderC>
            <div class="item" v-for="(item,index) in NewsData" :key="index">
                <div class="img-box">
                    <img :src="item.pic" class="img">
                </div>
                <router-link :to="{path:'/newsfile',query:{title:title,id:item.newsId}}" 
                    class="text-box">
                    <span class="title">{{item.title}}</span>
                    <div class="date">
                        <span>{{item.currentTime}}</span>
                        <div class="count">
                            <!-- <div class="icon"></div> -->
                            <img src="../style/img/drawable-hdpi/12-eye.png" class="icon">
                            <span>{{item.count}}</span>
                        </div>
                    </div>
                </router-link>
            </div>
        <div class="edital-bottom-line">
            <span>我是有底线的,喵~~~</span>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            title:'信工新闻眼',
            NewsData:[],
            formData:{
                page:1,
                rows:10,
                type:0
            },
            startX:0,
        }
    },
    methods:{
        getDate(){
            this.$store.commit("LOADING",true)
            this.$axios.get('/news/newsList.do',this.formData).then(res=>{
                [this.NewsData] = [...this.NewsData,res.rows] 
                console.log(this.NewsData)
                this.$store.commit("LOADING",false)
                this.IsLoadmore = true
                setTimeout(()=>{
                },1000)
            })
        },
        getTitle(){
            const titleM = this.$route.query.title
            const id = this.$route.query.id
            const type = this.$route.query.type
            this.title = titleM
            this.formData.type = type
        },
       
    },
    watch:{ 
        
    },
    created(){
        this.getDate()
        this.getTitle()
    }
}
</script>
<style lang="scss" scoped>
    .message-edital-box{
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
        .item{
            display: flex;
            border-bottom: 0.01rem solid #ccc;
            span,a{
                display:block ;
            }
            .img-box{
                margin: 0.2rem;
                width: 1.6rem;
                height: 1.6rem;
                .img{
                    width: 1.6rem;
                    height: 1.6rem;
                }
            }
            .text-box{
                display: block;
                font-size: 0.3rem;
                margin-top: 0.2rem;
                margin-right: 0.2rem;
                color: rgba(0, 0, 0, 0.959);
                display: flex;
                flex-direction: column;
                justify-content:space-between ;
                flex: 1;
                .title{
                    width: 100%;
                }
                .date{
                    font-size: 0.1rem;
                    color:#666;
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 0.2rem;
                    span{
                        height: 0.32rem;
                        line-height: 0.32rem;
                        font-size: 0.1rem;
                    }
                    .count{
                        display: flex;
                        align-items: center;
                        span{
                        height: 0.32rem;
                        line-height: 0.32rem;
                        font-size: 0.1rem;
                        }
                        .icon{
                            display: block;
                            width: 0.25rem;
                            height: 0.15rem;
                            
                            margin-right: 0.05rem;
                            opacity: 0.5;                           
                        }
                    }
                }
            }
        }
        .edital-bottom-line{
            height: 0.9rem;
            span{
                font-size: 0.3rem;
                display: block;
                height: 0.9rem;
                line-height: 0.9rem;
                width: 100%;
                text-align: center;
                color: #666;
            }
        }
    }
</style>
