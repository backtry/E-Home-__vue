<template>
    <div class="everPicture-box">
        <HeaderC :title='title'></HeaderC>
        <div class="evecontent">
            <div class="evecontent-item" v-for="(item,index) in everPictureData" :key="index" >
                <router-link :to="{path:'/newsfile',query:{title:title,id:item.newsId}}">
                    <img :src="item.pic" class="eveimg">
                    <span class="evetitle">{{item.title}}</span>
                </router-link>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            title:'呵呵，没传过来',
            formData:{
                page:1,
                rows:10,
                type:0
            },
            everPictureData:[]
        }
    },
    methods:{
        getDate(){
          this.$axios.get('/news/newsList.do',this.formData).then(res=>{
            this.everPictureData = res.rows
            console.log(this.everPictureData)
          })
        },  
        getTitle(){
            const titleM = this.$route.query.title
            const id = this.$route.query.id
            const type = this.$route.query.type
            this.title = titleM
            this.formData.type = type
        }
    },
    created(){
        this.getTitle()
        this.getDate()
    }
}
</script>
<style lang="scss" scoped>
.everPicture-box{
    .evecontent{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
        padding: 0.3rem;
        .evecontent-item{
            width:3.3rem;

            .eveimg{
                display: block;
                width: 100%;
                height: 2.5rem;
            }
            .evetitle{
                display: block;
                color: #666;
                font-size: 0.3rem;
            }
        }
    }    
}
</style>
