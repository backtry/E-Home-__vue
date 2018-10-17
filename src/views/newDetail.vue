<template>
    <div class="news-detail-box">
        <HeaderC :title='title'></HeaderC> 
        <div class="news">
            <div class="title">
                <span>{{newsData.title}}</span>
            </div>
            <div  class="contentRichText">
                <div v-html="newsData.content"></div>
            </div>
        </div>   
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:'',
            newsContent:'',
            newsData:[]
        }
    },
    methods:{
       getData(){
            const querydata = this.$route.query
            this.title = querydata.title
            const newsId = querydata.id
            this.$axios.get('/news/newsContent.do',{newsId}).then(res=>{
                this.newsData = res.data
                console.log(res.data)
                switch(res.data.type){
                    case 0:
                        this.title = '信工新闻眼'
                        break;
                    case 3:
                        this.title = '党建一点通';
                        break;
                    case 5:
                        this.title = '党员亮身份';
                        break;
                    case 6:
                        this.title = '随时随地学';
                        break;
                    case 4:
                        this.title = '制度建设';
                        break;
                    case 1:
                        this.title = '特色活动';
                        break;
                    case 8:
                        this.title = '政治学习';
                        break;
                    default:
                        break;
                }
           })
       },
      
          
    },
    created(){
        this.getData()
    }
}
</script>
<style lang="scss" scoped>
.news-detail-box{
    .title{
        text-align: center;
        font-size: 0.5rem;
        span{
            display: block;
            padding: 0.2rem;
        }
    }
   
}
</style>
<style lang="scss">
    .contentRichText{
        padding: 0 0.15rem;
        padding-bottom:0.2rem;
         h1,h2,h3,h4,h5,h6,p,span{
        font-weight: 500;
        font-size: 0.24rem;
    }
        img{
            display: block;
            width: 90%;
            margin: 0 auto;
        }
    }
</style> 

