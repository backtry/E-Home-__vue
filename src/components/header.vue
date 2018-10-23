<template>
    <div class="header-heighe-90">
        <div class="header">
            <div class="return-icon" @click="this.returnLastPage">
                <img src="../style/img/drawable-hdpi/返回_btn.png">
            </div>
            <span>{{title||this.$route.meta.title}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String
        }
    },
   data(){
       return{

       }
   },
   methods:{
       returnLastPage(){
           history.go(-1)
       }
   }
}
</script>
<style lang="scss" scoped>
.header-heighe-90{
    height: 0.9rem;
}
    .header{
        position: fixed;
        top:0;
        right: 0;
        left: 0;
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
            font-size: 0.36rem;
            color: #ffffff;
        }
    }
</style>

