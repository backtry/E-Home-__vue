<template>
    <div>
        <HeaderC :title="title"></HeaderC>    
         <button @click="this.getNews" >获取</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            title:'呵呵'
        }
    },
    methods:{
        getDate(){
          axios.get('http://211.67.177.56:8080/hhdj/news/newsList.do').then(res=>{
              console.log(res)
            })
        },
        getNews(){
            this.$axios.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70509%2Findex.html').then(res=>{
                console.log(res)
            })
        }
    },
    created(){
        this.getDate()
    }
}
</script>
<style lang="scss" scoped>

</style>
