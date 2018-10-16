<template>
     <div class="header">
            <div class="return-icon" @click="this.returnLastPage">
                <img src="../style/img/drawable-hdpi/返回_btn.png">
            </div>
            <span>{{title}}</span>
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
</style>

