<template>
    <div class="partyOftoday-box">
        <HeaderC title="党史上的今天"></HeaderC> 
        <div class="partyhistory-content" v-html="newsData" ></div>
    </div>
</template>
<script>
import getUrl from '@/util/getData.js'
import cheerio from 'cheerio'
export default {
    data(){
        return{
            newsData:''
        }
    },
    methods:{
        getNews(){
            this.$store.commit("LOADING",true)
            var date = new Date();
            var month = date.getMonth()+1;
            var day = date.getDate();
            month = month<10?"0"+month: "" + month;
            day = day<10?"0"+day: "" + day;
            console.log(month,day)
            let Url = getUrl(month,day)
            console.log(Url)
            this.$axios.get('/proxy/proxy.do',{url:Url}).then(res=>{
                // console.log(res)
                var $ = cheerio.load(res)
                this.newsData = $('div.p1_02').html()
                // console.log(this.newsData)
                this.$store.commit("LOADING",false)
            })
        }
    },
    created(){
       this.getNews()
    }
}
</script>
<style lang="scss" scoped>

</style>
<style lang="scss">
.partyhistory-content{
     padding: 0 0.15rem;
        padding-bottom:0.2rem;
        h1,h2{
            font-weight: 700;
            font-size: 0.4rem;
         }
        h3,h4,h5,h6{
            font-weight: 700;
            font-size: 0.3rem;
        }
        p,span{
            font-size:0.3rem;
            font-weight:400
        }
        img{
            display: block;
            width: 90%;
            margin: 0 auto;
        }
}
</style>
