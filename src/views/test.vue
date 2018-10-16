<template>
    <HeaderC :title="title"></HeaderC>    
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
      }
    },
    created(){
        this.getDate()
    }
}
</script>
<style lang="scss" scoped>

</style>
